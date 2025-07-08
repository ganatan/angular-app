import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { reply as mockReply } from './ai.mock';

export interface ContentGenerationResponse {
  success: boolean;
  data: string;
  error?: string;
}

export interface VoiceGenerationResponse {
  success: boolean;
  data: string;
  error?: string;
}

export interface VideoGenerationResponse {
  success: boolean;
  project_id: string;
  error?: string;
}

export interface VideoCheckResponse {
  success: boolean;
  ready: boolean;
  url: string;
  poster: string;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class AiService {
  private baseUrl = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  generateContent(llm: string, name: string, length: string, style: string, type: string): Observable<ContentGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockReply(type, { llm, name, length, style });

      return of({ success: true, llm: llm, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/llm/${type}/${llm}`;
    const body = { name, length, style };

    return this.http.post<ContentGenerationResponse>(url, body)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur API:', error);

          return of({
            success: false,
            data: '',
            error: this.getErrorMessage(error),
          });
        }),
      );
  }

  generateVoice(llm: string, name: string): Observable<VoiceGenerationResponse> {
    if (environment.useMock) {
      const safeName = name.toLowerCase().replace(/\s+/g, '-');
      const voiceMockPath = `assets/voice/${safeName}-${llm}.mp3`;

      return of({
        success: true,
        data: voiceMockPath,
      }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/voice/${llm}`;
    const body = { name };

    return this.http.post<VoiceGenerationResponse>(url, body).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur API:', error);

        return of({
          success: false,
          data: '',
          error: this.getErrorMessage(error),
        });
      }),
    );
  }

  generateVideo(llm: string, name: string): Observable<VideoGenerationResponse> {
    if (environment.useMock) {
      return of({
        success: true,
        project_id: 'mock-frontend-project-id',
      }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/video/generate/${llm}`;
    const body = { name };

    return this.http.post<VideoGenerationResponse>(url, body).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur API:', error);

        return of({
          success: false,
          project_id: '',
          error: this.getErrorMessage(error),
        });
      }),
    );

  }

  checkVideo(llm: string, id: string, name: string): Observable<VideoCheckResponse> {
    if (environment.useMock) {
      const name = 'ridley-scott';
      const safeName = name.toLowerCase().replace(/\s+/g, '-');
      const voiceMockPath = `assets/video/${safeName}-${llm}.mp4`;
      const voicePosterMockPath = `assets/video/${safeName}-${llm}.png`;

      return of({
        success: true,
        ready: true,
        url: voiceMockPath,
        poster: voicePosterMockPath,
      }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/video/check`;
    const body = { llm: llm, project_id: id, name: name };

    return this.http.post<VideoCheckResponse>(url, body).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur API:', error);

        return of({
          success: false,
          ready: false,
          url: '',
          poster: '',
          error: this.getErrorMessage(error),
        });
      }),
    );
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 0) {
      return 'Serveur inaccessible. Vérifiez votre connexion.';
    }

    return `Erreur ${error.status}: ${error.message}`;
  }

}


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

function getBaseUrl(): string {
  const backend = environment.backend;

  switch (backend) {
    case 'java':
      return 'http://localhost:8080/backend-java/api';
    case 'node':
    default:
      return 'http://localhost:3000/api';
  }
}

@Injectable({ providedIn: 'root' })
export class AiService {

  private baseUrl = getBaseUrl();
  private http = inject(HttpClient);

  generateContent(llm: string, name: string, length: string, style: string, type: string): Observable<ContentGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockReply(type, { llm, name, length, style });

      return of({ success: true, llm: llm, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/llm/${type}/${llm}`;
    console.log('00000000001:' + url)
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

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 0) {
      return 'Serveur inaccessible. Vérifiez votre connexion.';
    }

    return `Erreur ${error.status}: ${error.message}`;
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { reply as mockSpeakerReply } from './ai-speaker.mock';
import { reply as mockQuestionReply } from './ai-question.mock';
import { reply as mockDialogueReply } from './ai-dialogue.mock';

export interface VoiceId {
  id: string;
  name: string;
}

export interface AvatarId {
  id: number;
  name: string;
}

export interface Speaker {
  name: string;
  role: string;
  stance: string;
  personality: string;
  voiceId: VoiceId;
  avatarId: AvatarId;
}

export interface SpeakerData {
  moderator: Speaker;
  items: Speaker[];
}

export interface SpeakerGenerationResponse {
  success: boolean;
  data: SpeakerData;
  error?: string;
}

export interface QuestionItem {
  text: string;
  enabled: boolean;
  dialogueCount?: number;
}

export interface QuestionData {
  topic: string;
  items: QuestionItem[];
}

export interface QuestionGenerationResponse {
  success: boolean;
  data: QuestionData;
  error?: string;
}

export interface DialogueExchange {
  speaker: string;
  role: string;
  text: string;
  question?: string;
}

export interface DialogueData {
  topic: string;
  exchanges: DialogueExchange[];
}

export interface DialogueGenerationResponse {
  success: boolean;
  data: DialogueData;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class AiService {
  private baseUrl = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  generateSpeakers(topic: string, count: number): Observable<SpeakerGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockSpeakerReply(topic, count);

      return of({ success: true, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/podcast/speaker`;

    return this.http.post<SpeakerGenerationResponse>(url, { topic, count }).pipe(
      catchError((error: HttpErrorResponse) =>
        of({
          success: false,
          data: {
            moderator: {
              name: '',
              role: '',
              stance: '',
              personality: '',
              voiceId: { id: '', name: '' },
              avatarId: { id: -1, name: '' },
            },
            items: [],
          },
          error: this.getErrorMessage(error),
        }),
      ),
    );
  }

  generateQuestions(topic: string, count: number): Observable<QuestionGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockQuestionReply(topic, count);

      return of({ success: true, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/podcast/questions`;

    return this.http.post<QuestionGenerationResponse>(url, { topic, count }).pipe(
      catchError((error: HttpErrorResponse) =>
        of({
          success: false,
          data: { topic: topic, items: [] },
          error: this.getErrorMessage(error),
        }),
      ),
    );
  }

  generateDialogues(topic: string, questions: QuestionItem[], speakers: Speaker[]): Observable<DialogueGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockDialogueReply(topic, questions, speakers);

      return of({ success: true, data: mockData }).pipe(delay(1000));
    }

    const payload = {
      topic: topic,
      questions: questions.map(question => ({
        text: question.text,
        dialogueCount: question.dialogueCount ?? 2,
      })),
      speakers: speakers,
    };

    const url = `${this.baseUrl}/podcast/dialogues`;

    return this.http.post<DialogueGenerationResponse>(url, payload).pipe(
      catchError((error: HttpErrorResponse) =>
        of({
          success: false,
          data: { topic: topic, exchanges: [] },
          error: this.getErrorMessage(error),
        }),
      ),
    );
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 0) return 'Serveur inaccessible. Vérifiez votre connexion.';

    return `Erreur ${error.status}: ${error.message}`;
  }
}


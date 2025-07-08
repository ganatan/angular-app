import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AiService, SpeakerData, QuestionData, DialogueData } from './ai-service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

  topic = '';
  topicSpeakerCount = 0;
  topicQuestionCount = 0;

  speakerProgress = 0;
  speakerDuration = 0;
  speakerCount = 0;
  speakerLoading = false;

  questionProgress = 0;
  questionDuration = 0;
  questionCount = 0;
  questionLoading = false;

  dialogueProgress = 0;
  dialogueDuration = 0;
  dialogueLoading = false;

  speaker: SpeakerData | null = null;
  question: QuestionData | null = null;
  dialogue: DialogueData | null = null;

  useMock = environment.useMock;

  private aiService = inject(AiService);

  ngOnInit() {
    if (this.useMock) {
      this.topic = 'Angular vs React';
      this.topicSpeakerCount = 4;
      this.topicQuestionCount = 4;
    }
  }

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('dark-mode');
    }
  }

  loadSpeakers() {
    const start = performance.now();
    const interval = this.startProgress('speaker');

    this.speaker = null;
    this.speakerLoading = true;

    this.aiService.generateSpeakers(this.topic, this.topicSpeakerCount).subscribe((response) => {
      const duration = (performance.now() - start) / 1000;
      clearInterval(interval);
      this.speakerLoading = false;
      this.speakerDuration = duration;
      this.speakerProgress = 100;

      if (!response.success) {
        this.speaker = {
          moderator: {
            name: 'Erreur',
            role: '',
            stance: '',
            personality: '',
            voiceId: { id: '', name: '' },
            avatarId: { id: -1, name: '' },
          },
          items: [],
        };

        return;
      }

      this.speaker = response.data;
      this.speakerCount = this.speaker.items.length + 1;
    });
  }

  loadQuestions() {
    const start = performance.now();
    const interval = this.startProgress('question');

    this.question = null;
    this.questionLoading = true;

    this.aiService.generateQuestions(this.topic, this.topicQuestionCount).subscribe((response) => {
      const duration = (performance.now() - start) / 1000;
      clearInterval(interval);
      this.questionLoading = false;
      this.questionDuration = duration;
      this.questionProgress = 100;

      if (!response.success) {
        this.question = {
          topic: this.topic,
          items: [{ text: `Erreur : ${response.error || 'Erreur inconnue'}`, enabled: false }],
        };

        return;
      }

      this.question = response.data;
      this.questionCount = this.question.items.length;
    });
  }

  loadDialogues() {
    if (!this.speaker || !this.question || this.speaker.items.length === 0 || this.question.items.length === 0) {
      console.warn('Speakers ou questions manquants');

      return;
    }

    const enabledQuestions = this.question.items.filter(question => question.enabled);
    if (enabledQuestions.length === 0) {
      console.warn('Aucune question cochée');

      return;
    }

    const start = performance.now();
    const interval = this.startProgress('dialogue');

    this.dialogue = null;
    this.dialogueLoading = true;

    this.aiService
      .generateDialogues(this.topic, enabledQuestions, this.speaker.items)
      .subscribe((response) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);
        this.dialogueLoading = false;
        this.dialogueDuration = duration;
        this.dialogueProgress = 100;

        if (!response.success) {
          this.dialogue = {
            topic: this.topic,
            exchanges: [
              {
                speaker: 'Erreur',
                role: '',
                text: response.error || 'Erreur inconnue',
              },
            ],
          };

          return;
        }

        this.dialogue = response.data;
      });
  }

  startProgress(type: 'speaker' | 'question' | 'dialogue') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (type === 'speaker') this.speakerProgress = progress;
      else if (type === 'question') this.questionProgress = progress;
      else this.dialogueProgress = progress;
    }, 100);

    return interval;
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  AiService,
  ContentGenerationResponse,
  VoiceGenerationResponse,
  VideoGenerationResponse,
  VideoCheckResponse,
} from './ai-service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  name = 'ridley scott';
  type = 'biography';
  style = 'neutral';
  length = 'short';

  contentChatgpt = '';
  contentClaude = '';
  chatgptLoading = false;
  claudeLoading = false;
  chatgptError: string | null = null;
  claudeError: string | null = null;
  voiceChatgptError: string | null = null;
  voiceClaudeError: string | null = null;
  videoChatgptError: string | null = null;
  videoClaudeError: string | null = null;
  videoCheckChatgptError: string | null = null;
  videoCheckClaudeError: string | null = null;
  videoCheckChatgptProcess: boolean | null = null;
  videoCheckClaudeProcess: boolean | null = null;

  videoChatgptKey = false;

  voiceChatgpt = '';
  voiceClaude = '';
  voiceChatgptLoading = false;
  voiceClaudeLoading = false;

  videoChatgptId: string | null = null;
  videoClaudeId: string | null = null;

  videoChatgpt = '';
  videoPosterChatgpt = '';
  videoClaude = '';
  videoPosterClaude = '';
  videoChatgptLoading = false;
  videoClaudeLoading = false;
  videoCheckChatgptLoading = false;
  videoCheckClaudeLoading = false;

  chatgptDuration = 0;
  claudeDuration = 0;
  chatgptProgress = 0;
  claudeProgress = 0;

  voiceChatgptDuration = 0;
  voiceClaudeDuration = 0;
  voiceChatgptProgress = 0;
  voiceClaudeProgress = 0;

  videoChatgptDuration = 0;
  videoClaudeDuration = 0;
  videoChatgptProgress = 0;
  videoClaudeProgress = 0;

  useMock = environment.useMock;

  styleOptions = [
    { value: 'casual', label: 'Décontracté' },
    { value: 'cinematic', label: 'Cinématographique' },
    { value: 'dialog', label: 'Dialogué' },
    { value: 'dramatic', label: 'Dramatique' },
    { value: 'emotional', label: 'Émotionnel' },
    { value: 'historical', label: 'Historique' },
    { value: 'humorous', label: 'Humoristique' },
    { value: 'inspirational', label: 'Inspirant' },
    { value: 'interview', label: 'Interview fictive' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'minimal', label: 'Minimaliste' },
    { value: 'narrative', label: 'Narratif' },
    { value: 'neutral', label: 'Neutre' },
    { value: 'poetic', label: 'Poétique' },
    { value: 'press', label: 'Journalistique' },
    { value: 'satirical', label: 'Satirique' },
    { value: 'scientific', label: 'Scientifique' },
    { value: 'technical', label: 'Technique' },
  ];

  private aiService = inject(AiService);

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      document.body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('dark-mode');
    }
  }

  loadContent(llm: 'chatgpt' | 'claude') {
    const start = performance.now();
    const interval = this.startProgress(llm);
    if (llm === 'chatgpt') {
      this.contentChatgpt = '';
      this.chatgptLoading = true;
      this.chatgptProgress = 0;
      this.voiceChatgpt = '';
      this.chatgptDuration = 0;
      this.voiceChatgptDuration = 0;
      this.videoChatgpt = '';
      this.videoChatgptDuration = 0;
    } else {
      this.contentClaude = '';
      this.claudeLoading = true;
      this.claudeProgress = 0;
      this.voiceClaude = '';
      this.claudeDuration = 0;
      this.voiceClaudeDuration = 0;
      this.videoClaude = '';
      this.videoClaudeDuration = 0;
    }

    this.aiService
      .generateContent(llm, this.name, this.length, this.style, this.type)
      .subscribe((response: ContentGenerationResponse) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);
        if (llm === 'chatgpt') {
          this.chatgptError = response.success ? null : response.error || null;
          this.contentChatgpt = response.data;
          this.chatgptDuration = duration;
          this.chatgptLoading = false;
          this.chatgptProgress = 100;
        } else {
          this.claudeError = response.success ? null : response.error || null;
          this.contentClaude = response.data;
          this.claudeDuration = duration;
          this.claudeLoading = false;
          this.claudeProgress = 100;
        }
      });
  }

  resetContent(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.chatgptError = '';
      this.voiceChatgptError = '';
      this.videoChatgptError = '';
      this.contentChatgpt = '';
      this.chatgptDuration = 0;
      this.chatgptProgress = 0;
      this.voiceChatgpt = '';
      this.voiceChatgptDuration = 0;
      this.videoChatgpt = '';
      this.videoChatgptDuration = 0;
      this.videoChatgptLoading = false;
      this.videoChatgptId = '';
      this.videoChatgptError = '';
    } else {
      this.claudeError = '';
      this.voiceClaudeError = '';
      this.videoClaudeError = '';
      this.contentClaude = '';
      this.claudeDuration = 0;
      this.claudeProgress = 0;
      this.voiceClaude = '';
      this.voiceClaudeDuration = 0;
      this.videoClaude = '';
      this.videoClaudeDuration = 0;
      this.videoClaudeLoading = false;
      this.videoClaudeId = '';
      this.videoClaudeError = '';
    }
  }

  loadVoice(llm: 'chatgpt' | 'claude') {
    const start = performance.now();
    const interval = this.startVoiceProgress(llm);

    if (llm === 'chatgpt') {
      this.voiceChatgptLoading = true;
      this.voiceChatgpt = '';
      this.voiceChatgptDuration = 0;
      this.voiceChatgptProgress = 0;
    } else {
      this.voiceClaudeLoading = true;
      this.voiceClaude = '';
      this.voiceClaudeDuration = 0;
      this.voiceClaudeProgress = 0;
    }

    this.aiService
      .generateVoice(llm, this.name)
      .subscribe((response: VoiceGenerationResponse) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);

        const voiceUrl = response.success ? response.data : '';
        if (llm === 'chatgpt') {
          this.voiceChatgptError = response.success ? null : response.error || null;
          this.voiceChatgpt = voiceUrl;
          this.voiceChatgptDuration = duration;
          this.voiceChatgptLoading = false;
          this.voiceChatgptProgress = 100;
        } else {
          this.voiceClaudeError = response.success ? null : response.error || null;
          this.voiceClaude = voiceUrl;
          this.voiceClaudeDuration = duration;
          this.voiceClaudeLoading = false;
          this.voiceClaudeProgress = 100;
        }
      });
  }

  loadVideo(llm: 'chatgpt' | 'claude') {
    const start = performance.now();
    const interval = this.startVideoProgress(llm);

    if (llm === 'chatgpt') {
      this.videoChatgptLoading = true;
      this.videoChatgptId = null;
      this.videoChatgptDuration = 0;
      this.videoChatgptProgress = 0;
      this.videoChatgptError = null;
    } else {
      this.videoClaudeLoading = true;
      this.videoClaudeId = null;
      this.videoClaudeDuration = 0;
      this.videoClaudeProgress = 0;
      this.videoClaudeError = null;
    }

    this.aiService
      .generateVideo(llm, this.name)
      .subscribe((response: VideoGenerationResponse) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);

        if (llm === 'chatgpt') {
          this.videoChatgptLoading = false;
          this.videoChatgptDuration = duration;
          if (response.success) {
            this.videoChatgptId = response.project_id;
            this.videoChatgptProgress = 100;
          } else {
            this.videoChatgptError = response.error || 'Erreur lors de la création';
            this.videoChatgptProgress = 0;
          }
        } else {
          this.videoClaudeLoading = false;
          this.videoClaudeDuration = duration;
          if (response.success) {
            this.videoClaudeId = response.project_id;
            this.videoClaudeProgress = 100;
          } else {
            this.videoClaudeError = response.error || 'Erreur lors de la création';
            this.videoClaudeProgress = 0;
          }
        }
      });
  }

  checkVideo(llm: 'chatgpt' | 'claude') {
    let id = llm === 'chatgpt' ? this.videoChatgptId : this.videoClaudeId;
    // JOGGAI_APROJECT_ID = 'xxxx';
    // id = JOGGAI_APROJECT_ID
    if (!id) return;

    const start = performance.now();
    const interval = this.startVideoProgress(llm);

    if (llm === 'chatgpt') {
      this.videoChatgpt = '';
      this.videoPosterChatgpt = '';
      this.videoCheckChatgptLoading = true;
      this.videoChatgptDuration = 0;
      this.videoChatgptProgress = 0;
      this.videoCheckChatgptError = null;
      this.videoCheckChatgptProcess = false;
    } else {
      this.videoClaude = '';
      this.videoPosterClaude = '';
      this.videoCheckClaudeLoading = true;
      this.videoClaudeDuration = 0;
      this.videoClaudeProgress = 0;
      this.videoCheckClaudeError = null;
      this.videoCheckClaudeProcess = false;
    }
    this.aiService
      .checkVideo(llm, id, this.name)
      .subscribe((response: VideoCheckResponse) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);

        if (llm === 'chatgpt') {
          this.videoCheckChatgptLoading = false;
          this.videoChatgptDuration = duration;
          if (response.success) {
            this.videoChatgpt = response.url;
            this.videoPosterChatgpt = response.poster;
            this.videoCheckChatgptProcess = !response.ready;
            this.videoChatgptProgress = 100;
          } else {
            this.videoChatgpt = '';
            this.videoPosterChatgpt = '';
            this.videoCheckChatgptProcess = false;
            this.videoCheckChatgptError = response.error || 'Erreur lors de la création';
            this.videoChatgptProgress = 0;
          }
        } else {
          this.videoCheckClaudeLoading = false;
          this.videoClaudeDuration = duration;
          if (response.success) {
            this.videoClaude = response.url;
            this.videoPosterClaude = response.poster;
            this.videoCheckClaudeProcess = !response.ready;
            this.videoClaudeProgress = 100;
          } else {
            this.videoChatgpt = '';
            this.videoPosterClaude = '';
            this.videoCheckClaudeProcess = false;
            this.videoCheckClaudeError = response.error || 'Erreur lors de la création';
            this.videoClaudeProgress = 0;
          }
        }
      });
  }

  onStyleChange(value: string) {
    this.style = value;
    this.resetAll();
  }

  onLengthChange(value: string) {
    this.length = value;
    this.resetAll();
  }

  onTypeChange(value: string) {
    this.type = value;
    this.name = this.useMock
      ? value === 'biography' ? 'Ridley Scott' : 'Alien'
      : '';
    this.resetAll();
  }

  private resetAll() {
    this.contentChatgpt = '';
    this.contentClaude = '';
    this.chatgptDuration = 0;
    this.claudeDuration = 0;
    this.chatgptProgress = 0;
    this.claudeProgress = 0;
    this.voiceChatgpt = '';
    this.voiceClaude = '';
    this.videoChatgptLoading = false;
    this.videoChatgptId = '';
    this.videoChatgptError = '';
    this.videoClaudeLoading = false;
    this.videoClaudeId = '';
    this.videoClaudeError = '';
  }

  startProgress(llm: 'chatgpt' | 'claude') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (llm === 'chatgpt') this.chatgptProgress = progress;
      else this.claudeProgress = progress;
    }, 100);

    return interval;
  }


  startVoiceProgress(llm: 'chatgpt' | 'claude') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (llm === 'chatgpt') this.voiceChatgptProgress = progress;
      else this.voiceClaudeProgress = progress;
    }, 100);

    return interval;
  }

  startVideoProgress(llm: 'chatgpt' | 'claude') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (llm === 'chatgpt') this.videoChatgptProgress = progress;
      else this.videoClaudeProgress = progress;
    }, 100);

    return interval;
  }
}

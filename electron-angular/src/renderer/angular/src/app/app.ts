import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  useMock = environment.useMock;
  messages: { from: 'user' | 'bot', content: string }[] = [];
  message = '';
  ws?: WebSocket;
  connected = false;
  wsStatus = 'Déconnecté';
  notification = '';

  ngOnInit() {
    if (!this.useMock) {
      this.connectWS();
    }
  }

  toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
  }

  connectWS() {
    this.ws = new WebSocket('ws://localhost:8080');
    this.ws.onopen = () => {
      this.connected = true;
      this.wsStatus = 'Connecté';
      this.notification = 'WebSocket prêt';
    };
    this.ws.onclose = () => {
      this.connected = false;
      this.wsStatus = 'Déconnecté';
      this.notification = 'WebSocket déconnecté';
    };
    this.ws.onerror = (err) => {
      console.error('WebSocket erreur', err);
      this.notification = 'Erreur WebSocket';
    };
    this.ws.onmessage = (msg) => {
      this.addMessage('bot', msg.data);
      this.notification = 'Réponse reçue du serveur';
    };
  }

  sendMessage() {
    const content = this.message.trim();
    if (!content) return;
    this.addMessage('user', content);
    this.message = '';

    if (this.useMock) {
      setTimeout(() => {
        this.addMessage('bot', `Réponse mockée à "${content}"`);
        this.notification = 'Réponse simulée reçue';
      }, 500);
    } else if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(content);
      this.notification = 'Message envoyé';
    } else {
      this.notification = 'WebSocket non connecté';
    }
  }

  testWS() {
    if (this.useMock) {
      this.notification = 'Mode mock activé, pas de test réel';
    } else if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send('Test de message');
      this.notification = 'Test de message envoyé';
    } else {
      this.notification = 'WebSocket non connecté';
    }
  }

  private addMessage(from: 'user' | 'bot', content: string) {
    this.messages.push({ from, content });
    setTimeout(() => {
      const container = document.querySelector('.flex-grow-1.overflow-auto');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  }
}


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// import { environment } from '../environments/environment';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
// })
// export class App {
//   useMock = environment.useMock;
//   messages: { from: 'user' | 'bot', content: string }[] = [];
//   message = '';
//   ws?: WebSocket;
//   connected = false;
//   wsStatus = 'Déconnecté';

//   ngOnInit() {
//     if (!this.useMock) {
//       this.connectWS();
//     }
//   }

//   toggleTheme() {
//     document.body.classList.toggle('dark-mode');
//     document.documentElement.classList.toggle('dark-mode');
//   }

//   connectWS() {
//     this.ws = new WebSocket('ws://localhost:8080');
//     this.ws.onopen = () => {
//       this.connected = true;
//       this.wsStatus = 'Connecté';
//     };
//     this.ws.onclose = () => {
//       this.connected = false;
//       this.wsStatus = 'Déconnecté';
//     };
//     this.ws.onerror = (err) => {
//       console.error('WebSocket erreur', err);
//     };
//     this.ws.onmessage = (msg) => {
//       this.addMessage('bot', msg.data);
//     };
//   }

//   sendMessage() {
//     const content = this.message.trim();
//     if (!content) return;

//     this.addMessage('user', content);
//     this.message = '';

//     if (this.useMock) {
//       setTimeout(() => {
//         this.addMessage('bot', `Réponse mockée à "${content}"`);
//       }, 500);
//     } else if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//       this.ws.send(content);
//     }
//   }

//   testWS() {
//     if (this.useMock) {
//       alert('Mode mock activé, WebSocket désactivé');
//     } else if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//       this.ws.send('Test de message');
//     }
//   }

//   private addMessage(from: 'user' | 'bot', content: string) {
//     this.messages.push({ from, content });
//     setTimeout(() => {
//       const container = document.querySelector('.flex-grow-1.overflow-auto');
//       if (container) {
//         container.scrollTop = container.scrollHeight;
//       }
//     }, 0);
//   }
// }


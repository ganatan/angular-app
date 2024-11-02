import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    return true;
  }

  getToken(): string {
    return localStorage.getItem('authToken') || '';
  }
}

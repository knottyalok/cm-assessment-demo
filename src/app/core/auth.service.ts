import { Injectable, signal, computed, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './api.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private cookieKey = 'auth_token';
  private _token = signal<string | null>(null);
  private _userInfo = signal<string | null>(null);
  private router = inject(Router);
  
  token = computed(() => this._token());
  isLoggedIn = computed(() => !!this._token());
  
  constructor(private cookie: CookieService, private api: ApiService) {
    // initialize here
    const storedToken = this.cookie.get(this.cookieKey);
    this._token.set(storedToken || null);
  }

  login(username: string, password: string) {
    return this.api.post<{ token: string }>('login', { username, password }).pipe(
      tap(res => {
        this.cookie.set(this.cookieKey, res.token, { path: '/', sameSite: 'Lax' });
        this._token.set(res.token);
        this._userInfo.set(username);
      })
    );
  }

  logout() {
    this.cookie.delete(this.cookieKey, '/');
    this._token.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this._token();
  }

  getUserInfo() {
    return this._userInfo();
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../common/spinner/spinner.service';
import { finalize } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private spinner = inject(SpinnerService);
  private baseUrl = 'https://reqres.in/api'; // ✅ change as per your backend

  get<T>(endpoint: string, params?: Record<string, string>): Observable<T> {
    this.spinner.show();
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      params: new HttpParams({ fromObject: params || {} })
    }).pipe(finalize(() => this.spinner.hide()));
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    this.spinner.show();
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body)
      .pipe(finalize(() => this.spinner.hide()));
  }
}

import { inject, Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private api = inject(ApiService);

  constructor() { }

  getList(): Observable<any> {
    return this.api.get<any>('unknown?delay=4');
  }
}

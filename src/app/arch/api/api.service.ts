import { Inject, Injectable } from '@angular/core';

export const API_URL = 'api-url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    @Inject(API_URL) private apiRoot: string
  ) { }
}

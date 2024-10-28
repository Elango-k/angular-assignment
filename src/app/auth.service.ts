import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  accessToken: any;
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    console.log(username, password ,"================")
    return this.http.post<LoginResponse>(this.apiUrl, { username, password });
  }
}

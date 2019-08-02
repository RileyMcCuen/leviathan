import { APIEndpoint } from './../shared/constants/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    this.http
      .post(APIEndpoint + '/auth/login', { email, password })
      .subscribe((data: any) => console.log(data));
  }

  register(email: string, password: string) {
    this.http
      .post(APIEndpoint + '/auth/register', {email, password})
      .subscribe((data: any) => console.log(data));
  }
}

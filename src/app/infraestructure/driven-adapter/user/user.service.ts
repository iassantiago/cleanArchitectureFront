import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserGateway } from 'src/app/domain/models/gateway/user.gateway';

@Injectable({
  providedIn: 'root'
})

export class UserService extends CreateUserGateway {
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
    super();
  }

  createUser(params: any): Observable<any> {
    return this.http.post<any>(
      'https:/jsonplaceholder.typicode.com/users',
      params,
      {
        headers: this.httpHeaders
      });
  }
}

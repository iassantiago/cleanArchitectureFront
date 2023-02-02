import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { CreateUserGateway } from 'src/app/domain/models/gateway/user.gateway';
import { IUserModel } from 'src/app/domain/models/user.models';

@Injectable()
export class PostCreateUserUseCase {
  constructor(private createUserGateway: CreateUserGateway) {}

  invoke(params: any): Observable<IUserModel | null> {
    return this.createUserGateway.createUser(params).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }
}


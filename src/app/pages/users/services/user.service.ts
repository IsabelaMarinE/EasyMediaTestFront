import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/components/models/response.model';
import { UserModel } from '../models/user.model';
import { LogInModel } from '../models/login-user.model';
import { CreateUserModel } from '../models/create-user.model';
import { LogInResponseModel } from '../models/login-response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    logOut(id: Number): Observable<ResponseModel<UserModel>> {
      return this.http.post<ResponseModel<UserModel>>(`${environment.apiUrl}/users/logout`, id, httpOptions);
    }

    logIn(request: LogInModel): Observable<ResponseModel<LogInResponseModel>> {
        return this.http.post<ResponseModel<LogInResponseModel>>(`${environment.apiUrl}/users/login`, request, httpOptions)
    }

    createUser(request: CreateUserModel): Observable<UserModel> {
      return this.http.post<UserModel>(`${environment.apiUrl}/users/create`, request, httpOptions);
    }
}

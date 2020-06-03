import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { APP_API } from '../app.api';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<UserModel[]> {

    let endpoint: string = `${APP_API}/users`

    return this.http.get<UserModel[]>(endpoint)
  }
}

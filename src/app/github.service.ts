
import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable()
export class GithubService {
 // tslint:disable-next-line:no-inferrable-types
 baseURL: string = 'https://api.github.com';
 constructor(private http: HttpClient) {
 }

 getRepository(userName: string): Observable<Repository[]> {
      return this.http.get<Repository[]>(this.baseURL + '/users/' + userName + '/repository');
 }
}

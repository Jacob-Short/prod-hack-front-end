import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// makes use of observables for all transactions. Must import
// RxJS pbservable and operator symbols. These imports are typical
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Member } from './member/Member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = 'http://localhost:8080/members';
  constructor(private http: HttpClient) {}

  getMembers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  loginMember(member: Member): Observable<any> {
    return this.http.post<any>(this.baseUrl, member);
  }

  createMember(member: Member): Observable<any> {
    return this.http.post<any>(this.baseUrl, member);
  }
}

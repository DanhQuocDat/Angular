import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment as env } from 'src/environments/environment';
//-----123456
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = env.apiURL;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    const myParam = new HttpParams().set('page', '3').set('sort', 'true');
    return this.http.get<User[]>(`${this.apiURL}/users`, { params: myParam })
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiURL}/users/1`)
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiURL}/users`, user)
  }

  // UPDATE all field
  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiURL}/users/${user.id}`, user)
  }

  // UPDATE with OPTION Field
  patchUser(user: User): Observable<User>{
    return this.http.patch<User>(`${this.apiURL}/users/${user.id}`, user)
  }

  //Detele User Data
  deleteUser(id: number): Observable<unknown>{
    return this.http.delete<unknown>(`${this.apiURL}/users/${id}`);
  }
}

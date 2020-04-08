import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private username: string; // Github Username

  constructor(private http: HttpClient) {
    this.username = 'prasanna';
  }

  public getUser() {
    return this.http.get('https://api.github.com/users/' + this.username)
  }
}

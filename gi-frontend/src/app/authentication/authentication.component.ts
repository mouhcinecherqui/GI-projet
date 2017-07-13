import {User} from '../superuser/user';
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  authentication = true;
  login: string;
  constructor(public router: Router,
    private http: Http) {}


  connectUser(userId: string, userPwd: string) {

    if (userId === 'a') {
      this.authentication = false;
      this.router.navigate(['/superuser']);
    }

    if (userId === 'b') {
      this.authentication = false;
      this.router.navigate(['/simpleuser']);
    }
  }
  getUser(): Promise<User[]> {
    return this.http.get('/api/authentication')
      .toPromise()
      .then(response => response.json() as User[]);
  }
}


import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn() {
    this.authService.SingIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareil']);
      }
    );
  }
  onSignOut() {
    this.authService.SingOut();
    this.authStatus = this.authService.isAuth;
  }

}

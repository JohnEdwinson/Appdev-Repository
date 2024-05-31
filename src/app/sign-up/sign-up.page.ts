import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.email, this.password, this.confirmPassword);
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
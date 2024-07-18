import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [AuthLayoutComponent]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

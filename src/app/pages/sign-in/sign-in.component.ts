import { Component } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AuthLayoutComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}

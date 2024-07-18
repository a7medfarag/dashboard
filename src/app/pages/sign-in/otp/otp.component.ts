import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { TimerComponent } from '../../../shared/components/timer/timer.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  standalone: true,
  imports: [
    AuthLayoutComponent,
    ReactiveFormsModule,
    ButtonModule,
    InputOtpModule,
    TimerComponent
  ]
})
export class OtpComponent implements OnInit {

  otpForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.otpForm = this.fb.group({
      otp: ['', Validators.required],
    });
  }
}

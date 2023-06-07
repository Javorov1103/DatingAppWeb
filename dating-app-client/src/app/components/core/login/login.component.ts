import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginFailed = false;
  public isLoggingIn = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      companyId: [null, Validators.required],
      userNumber: [null, Validators.required],
      password: [null, Validators.required],
      rememberMe: [true],
    });
  }

  public onSubmit() {
    if (this.loginForm.valid) {
        this.isLoggingIn = true;
        this.authService.signIn(this.loginForm.value);
    }
}
}

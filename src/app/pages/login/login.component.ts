import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm : FormGroup;

constructor(private router: Router, private authService: AuthService) {
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
}

login() {
  if (this.loginForm.valid) {
    localStorage.setItem('user', JSON.stringify(this.loginForm.value));

    this.router.navigate(['/home']);
  } else {
    alert('Rellene los campos correctamente');
  }
} 
}

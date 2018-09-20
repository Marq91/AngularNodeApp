import { Component } from '@angular/core';
import { ApiService} from './api.service';

@Component({
  selector: 'login',
  template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title>
            <h4>Login </h4>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
        <mat-form-field>
            <input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" type=email>
        </mat-form-field>
        <mat-form-field>
            <input [(ngModel)]="loginData.pwd" name="password" matInput placeholder="password" type="password">
        </mat-form-field>
        <button (click)="post()" mat-raised-button color="primary">Login</button>
        </form>
    </mat-card-content>
    </mat-card>
  `
})
export class LoginComponent {
    loginData = {}

    constructor(private apiService: ApiService){}

    post(){
        //Llamar a la funcion sendUserRegistration desde el api.service (se debe importar ApiService desde 'messages.component.ts')
        this.apiService.loginUser(this.loginData)
    }
}
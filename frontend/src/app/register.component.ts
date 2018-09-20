import { Component } from '@angular/core';
import { ApiService} from './api.service';

@Component({
  selector: 'register',
  template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title>
            <h4>Register New User </h4>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
        <mat-form-field>
            <input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type=email>
        </mat-form-field>
        <mat-form-field>
            <input [(ngModel)]="registerData.pwd" name="password" matInput placeholder="password" type="password">
        </mat-form-field>
        <button (click)="post()" mat-raised-button color="primary">Register</button>
        </form>
    </mat-card-content>
    </mat-card>
  `
})
export class RegisterComponent {
    registerData = {}

    constructor(private apiService: ApiService){}

    post(){
        console.log(this.registerData)
        //Llamar a la funcion sendUserRegistration desde el api.service (se debe importar ApiService desde 'messages.component.ts')
        this.apiService.sendUserRegistration(this.registerData)
    }
}
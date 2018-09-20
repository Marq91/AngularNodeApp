import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ApiService} from './api.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent, LoginComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatCardModule, 
    RouterModule.forRoot(routes), 
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

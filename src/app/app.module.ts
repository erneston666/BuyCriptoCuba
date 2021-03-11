import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,

 
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AnimateOnScrollModule.forRoot()
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { InicioComponent } from "./components/inicio/inicio.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },


  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

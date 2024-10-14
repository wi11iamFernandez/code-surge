import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },       // Route per la homepage
    { path: 'login-component', component: LoginFormComponent },
    { path: '**', redirectTo: '' }
];

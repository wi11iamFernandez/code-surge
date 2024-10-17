import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailViaggiComponent } from './detail-viaggi/detail-viaggi.component';
import { RegisterFormComponent } from './register-form/register-form.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },       // Route per la homepage
    { path: 'login-component', component: LoginFormComponent },
    { path: 'deatil-viaggi', component: DetailViaggiComponent },
    { path: 'register-form', component: RegisterFormComponent },
    { path: '**', redirectTo: '' }
];

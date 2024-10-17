import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailViaggiComponent } from './detail-viaggi/detail-viaggi.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListViaggiComponent } from './list-viaggi/list-viaggi.component';
import { MainAboutUsComponent } from './main-about-us/main-about-us.component';
import { ContattaciDetailComponent } from './contattaci-detail/contattaci-detail.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },       // Route per la homepage
    {
        path: 'home-detail', component: HomePageComponent, children: [
            { path: 'about-us-detail', component: MainAboutUsComponent },
            { path: 'viaggi-detail', component: DetailViaggiComponent },
            { path: 'contattaci-detail', component: ContattaciDetailComponent }
        ]
    },
    { path: 'login-component', component: LoginFormComponent },
    { path: 'deatil-viaggi', component: DetailViaggiComponent },
    { path: 'register-form', component: RegisterFormComponent },
    { path: '**', redirectTo: '' }
];

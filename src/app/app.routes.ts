import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CreaViaggioComponent } from './crea-viaggio/crea-viaggio.component';
import { ViaggiUtenteComponent } from './viaggi-utente/viaggi-utente.component';
import { MieIscrizioniComponent } from './mie-iscrizioni/mie-iscrizioni.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },       // Route per la homepage
    {
        path: 'home-detail', component: HomePageComponent
    },
    { path: 'login-component', component: LoginFormComponent },
    { path: 'register-form', component: RegisterFormComponent },
    { path: 'crea-viaggio', component: CreaViaggioComponent },
    { path: 'viaggi-utente', component: ViaggiUtenteComponent },
    { path: 'mie-iscrizioni', component: MieIscrizioniComponent },
    { path: '**', redirectTo: '' }
];

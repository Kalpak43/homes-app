import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'home/:id',
        component: HomeDetailsComponent
    }, 
    {
        path: 'signup',
        component: SignupComponent
    }
];

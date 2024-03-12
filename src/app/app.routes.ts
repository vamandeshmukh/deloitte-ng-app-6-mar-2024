import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];


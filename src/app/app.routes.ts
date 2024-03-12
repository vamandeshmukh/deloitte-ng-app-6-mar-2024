import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductDetailComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'add-product', pathMatch: 'full', component: AddProductComponent },
    { path: 'products-list', pathMatch: 'full', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Page404Component },
];



// import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { ProductListComponent } from './components/product-list/product-list.component';

// export const routes: Routes = [
//     { path: 'home', component: HomeComponent },
//     { path: 'products', component: ProductListComponent },
//     { path: 'login', component: LoginComponent },
//     { path: 'register', component: RegisterComponent },
// ];


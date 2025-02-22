import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { AuthComponent } from './core/layouts/auth/auth.component';
import { UserComponent } from './core/layouts/user/user.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { ProductDetailsComponent } from './features/product/components/product-details/product-details.component';
import { ProductsListComponent } from './features/product/components/products-list/products-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

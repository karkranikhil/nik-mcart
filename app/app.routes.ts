// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/loginComponent/mcartLogin.component';
import { productListComponent } from './components/productListComponent/productList.component';
// Route Configuration
export const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'productList',component:productListComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';



import { AppComponent }   from './app.component';
import { NavbarComponent }   from './components/navbarComponent/mcartNavbar.component';
import { LoginComponent } from './components/loginComponent/mcartLogin.component';
import { productListComponent } from './components/productListComponent/productList.component';
import { MobileFilterPipe } from './utils/textBoxSearch.pipe';
import { routing } from './app.routes';
@NgModule({
  imports:      [ BrowserModule,RouterModule,routing,FormsModule],
  declarations: [ AppComponent,NavbarComponent, LoginComponent,productListComponent,MobileFilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

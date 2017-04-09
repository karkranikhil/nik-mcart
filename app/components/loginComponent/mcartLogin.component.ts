import { Component,Output, Input,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Login }    from './loginModel';
@Component({
  selector: 'mcart-login',
  templateUrl: 'app/Components/loginComponent/mcartLogin.component.html',
  styleUrls:['app/Components/loginComponent/mcartLogin.component.css']
})
export class LoginComponent {
constructor(private router: Router) { }
  model = new Login('','');

  
  onSubmit() { 
    console.log(this.model);
    this.router.navigateByUrl('/productList');
   }
 }

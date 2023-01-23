import { Component } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent{

  model : User = new User("","","","")
  
  onSubmit(): void{
    
    // form submitted
    console.log('Formulaire envoyé !');
  }

  

}

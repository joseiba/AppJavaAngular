import { Component } from '@angular/core';

import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addrees: {
    street: string;
    city: string;
  };
  
  hobbies: string[];

  /*constructor(){
    this.age = 23;
    this.addrees = {
      street: '2121 Asuncion',
      city: 'Paraguay'
    };

    this.hobbies = ['swiming', 'read', 'write'];

  }*/

  name: string = 'Jose Ibañez';
  age: number = 28;
  users: string[] = ['ryan', 'jose', 'mario'];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
  }
  addUser(newUser){
    this.users.push(newUser.value);//agrega nuevos usuarios
    newUser.value = '';//Deja en blanco el input 
    newUser.focus();//Deja el cursor dentro del input
    console.log(newUser.value);
    return false;
  }


  deleteUser(user){
    for(let i=0; i <this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }

  posts = []


}

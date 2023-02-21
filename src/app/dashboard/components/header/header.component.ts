import { UserRegister } from './../../../models/user.model';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public loggedUser:boolean = false;
  public userName:any;

  constructor(private router: Router){}

  ngOnInit() {
    this.loggedUser = localStorage.getItem('loggedUser') === 'true';
    this.userName = localStorage.getItem('name');
    console.log(typeof this.loggedUser);

  }

  logout():void{
    localStorage.setItem('loggedUser', JSON.stringify('false'));
    localStorage.setItem('name', JSON.stringify(null));
    
  } 

}

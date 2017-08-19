import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  userName: String = '';
  password = true;
  tentative=1;
  tries = [''];
  constructor() { 
  }

  namesIsEmpty(){
    if (this.userName == '')
      return true;
    return false;
  }

  saveUserName(event: Event){
    console.log(event);
    this.userName='';
  }

  savePassword(){
    this.tries.push('Tentative '+ this.tentative);
    this.password = this.tentative%2 == 0 ;
    this.tentative++;
  }

  ngOnInit() {
  }

}

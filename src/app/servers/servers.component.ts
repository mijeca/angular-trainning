import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName='Test Server Name';
  allowNewServer = false;
  serverCreation = 'No Server had Been Created';

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreation = 'Server Was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
      this.serverName=(<HTMLInputElement>event.target).value;
  }

}

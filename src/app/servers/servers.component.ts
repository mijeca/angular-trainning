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
  serverCreated = false;
  servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4']

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    
    this.serverCreation = 'Server Was Created! Name is ' + this.serverName;
    this.servers.push(this.serverName)
    this.serverCreated=true;
  }

  onUpdateServerName(event: Event){
      this.serverName=(<HTMLInputElement>event.target).value;
  }

}

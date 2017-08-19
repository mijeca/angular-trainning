import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverName: String ='Server';
  serverStatus: String = '';
  serverIp: String = '127.0.0.1';

  constructor(){

    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'OffLine';

  }


  getServerStatus(){
    return this.serverStatus;
  }

  getStatusCollor(){
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}

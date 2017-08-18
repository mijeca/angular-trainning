import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverName: String ='Server';
  serverStatus: String = 'Offline'
  serverIp: String = '127.0.0.1'


  getServerStatus(){
    return this.serverStatus+"Method";
  }

}

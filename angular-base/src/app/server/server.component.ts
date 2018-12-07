// import the .../core is important
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}
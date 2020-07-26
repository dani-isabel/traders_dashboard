import { Component } from '@angular/core';
import { GetComercesService } from './services/get-comerces.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dasboard';
  response;
  constructor(
    private getcomerces : GetComercesService
  ){}
  getInfo():void {
    this.getcomerces.getApi()
    .subscribe (
      response => (console.log(response)),
      error => (console.log('There is an error',error))
    );
  }
}

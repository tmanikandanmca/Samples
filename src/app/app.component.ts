import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Component Interaction';
  // // child to parent
  // Counter = 5;
  // ClickCounter!:number;


    // parent to child
    Counter = 0;
    ClickCounter:number=5;
  
  countChangedHandler(count: number) {
    this.Counter = count;
    this.ClickCounter=count;
    console.log(count);
  }
}

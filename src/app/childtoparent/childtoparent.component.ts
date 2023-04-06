import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.scss']
})
export class ChildtoparentComponent  {

  @Input() count!: number;
 
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  increment() {
      this.count++;
      this.countChanged.emit(this.count);
    }
  decrement() {
      this.count--;
      this.countChanged.emit(this.count);
  }

}

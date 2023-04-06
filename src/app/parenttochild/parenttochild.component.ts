import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parenttochild',
  templateUrl: './parenttochild.component.html',
  styleUrls: ['./parenttochild.component.scss']
})
export class ParenttochildComponent implements OnInit {

  @Input() count!: number;
 
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

    increment() {
        this.count++;
        this.countChanged.emit(this.count);
      }
    decrement() {
        this.count--;
        this.countChanged.emit(this.count);
    }
}

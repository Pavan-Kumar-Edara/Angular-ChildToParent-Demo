import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() sendDataEmitter:EventEmitter<string>=new EventEmitter
  constructor() { }

  ngOnInit(): void {
    
  }

  SendData(){
      this.sendDataEmitter.emit('From child this is the data')
  }

}

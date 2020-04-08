import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  public lib = 'jQuery';

  // whichLib() { console.log('Voted - lib: ', this.lib)};
  public whichLib = () => { console.log('Voted - library: ', this.lib); };

} 

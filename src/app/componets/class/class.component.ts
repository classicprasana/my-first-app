import { Component, OnInit } from '@angular/core';

/*export class TvChannel {  // define this first i.e. before the component.
    id: number;
    name: string;
}*/
import { TvChannel } from 'src/app/module/TvChannel';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public title = 'Popular TV Channel';

  public chan: TvChannel = {
    id: 507,
    name: 'Times NOW'
  };




}

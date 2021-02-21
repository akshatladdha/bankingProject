import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType : "full_numbers",
      lengthMenu : [5, 10, 15, 20]
    };

  }

  

}

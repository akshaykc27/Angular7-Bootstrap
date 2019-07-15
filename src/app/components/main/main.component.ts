import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public search;

  constructor() { }

  ngOnInit() {
  }

}

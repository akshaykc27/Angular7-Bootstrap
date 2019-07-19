import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public search;
  public dashboard: boolean = true;
  public widget: boolean = false;
  public uiElements: boolean = false;
  public jsonData ;
  constructor(public dataService : DataService,
    public router : Router) { }

  ngOnInit() {
   console.log("dashboard",this.dashboard);
   console.log("widget",this.widget);
   
   this.dataService.getData().subscribe( data => {
     console.log("data in ts",data);
     this.jsonData = data;
     console.log("json data",this.jsonData);
     
   })
  }
  goToDashboard(){
     this.router.navigate(['dashboard'])
  }
// change(){
//   this.x=true;
//   console.log('___________',this.x);
// }
}

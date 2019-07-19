import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartsModule, Label } from 'ng2-charts'
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public jsonData;
  public newUsers;
  public feedbacks;
  public employees;
  public sales;
  public tableDetails;
  

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.jsonData = data;
      this.newUsers = this.jsonData.matcard1[0].newUsers;
      this.feedbacks = this.jsonData.matcard1[0].feedbacks;
      this.employees = this.jsonData.matcard1[0].employees;
      this.sales = this.jsonData.matcard1[0].sales;
      console.log("new users", this.employees);


      this.tableDetails = this.jsonData.tableDetails
      console.log("tableDetails", this.tableDetails);
    })
  }


}

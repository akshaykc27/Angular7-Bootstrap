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
  
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 70, 85, 95, 75, 100],label: 'Top Products' },
    { data: [30, 36, 25, 35, 45, 50, 60],label: 'Support Cases' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

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

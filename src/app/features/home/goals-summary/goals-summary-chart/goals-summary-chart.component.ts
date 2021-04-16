import { Component, OnInit } from '@angular/core';
import * as chartJs from 'chart.js';

@Component({
  selector: 'app-goals-summary-chart',
  templateUrl: './goals-summary-chart.component.html',
  styleUrls: ['./goals-summary-chart.component.scss']
})
export class GoalsSummaryChartComponent implements OnInit {

  public doughnutChartLabels = ['Pending', 'Completed Successfuly', 'Incomplete'];
  public doughnutChartData = [120, 150, 180];
  public doughnutChartType: chartJs.ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}

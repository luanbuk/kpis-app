import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as chartJs from 'chart.js';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-goal-status-chart',
  templateUrl: './goal-status-chart.component.html',
  styleUrls: ['./goal-status-chart.component.scss']
})
export class GoalStatusChartComponent implements OnInit {



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: chartJs.ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

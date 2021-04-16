import { Component, OnInit } from '@angular/core';
import * as chartJs from 'chart.js';

class Color{
  constructor(readonly backgroundColor: string){}
}


@Component({
  selector: 'app-goals-summary-chart',
  templateUrl: './goals-summary-chart.component.html',
  styleUrls: ['./goals-summary-chart.component.scss']
})
export class GoalsSummaryChartComponent implements OnInit {


  labels = ['Completed Successfuly','Pending',  'Incomplete'];
  colors: Color[] = [new Color('green'), new Color('yellow'), new Color('blue')];
  data = [120, 150, 180];
  type: chartJs.ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}

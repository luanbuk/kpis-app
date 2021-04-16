import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';
import { GoalsSummaryComponent } from './home/goals-summary/goals-summary.component';
import { ThirdPartyModule } from '../shared/third-party/third-party.module';
import { GoalsSummaryChartComponent } from './home/goals-summary/goals-summary-chart/goals-summary-chart.component';


@NgModule({
  declarations: [
    HomeComponent,
    GoalsSummaryComponent,
    GoalsSummaryChartComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule,
    ThirdPartyModule
  ]
})
export class FeaturesModule { }

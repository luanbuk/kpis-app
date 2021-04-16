import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';
import { GoalsSummaryComponent } from './home/goals-summary/goals-summary.component';
import { ThirdPartyModule } from '../shared/third-party/third-party.module';
import { GoalsSummaryChartComponent } from './home/goals-summary/goals-summary-chart/goals-summary-chart.component';
import { GoalStatusComponent } from './home/goal-status/goal-status.component';
import { GoalStatusChartComponent } from './home/goal-status/goal-status-chart/goal-status-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    GoalsSummaryComponent,
    GoalsSummaryChartComponent,
    GoalStatusComponent,
    GoalStatusChartComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule,
    ThirdPartyModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }

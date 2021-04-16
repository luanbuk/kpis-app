import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsSummaryChartComponent } from './goals-summary-chart.component';

describe('GoalsSummaryChartComponent', () => {
  let component: GoalsSummaryChartComponent;
  let fixture: ComponentFixture<GoalsSummaryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsSummaryChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsSummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

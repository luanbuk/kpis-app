import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalStatusChartComponent } from './goal-status-chart.component';

describe('GoalStatusChartComponent', () => {
  let component: GoalStatusChartComponent;
  let fixture: ComponentFixture<GoalStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalStatusChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

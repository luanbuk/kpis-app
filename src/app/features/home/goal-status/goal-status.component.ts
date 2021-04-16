import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Goal } from 'src/app/domain/goals/goal';

@Component({
  selector: 'app-goal-status',
  templateUrl: './goal-status.component.html',
  styleUrls: ['./goal-status.component.scss']
})
export class GoalStatusComponent implements OnInit {

  goals: Goal[] = []

  goal = new Goal('Bible reading');

  selectedGoal = new FormControl();
  filteredGoals: Observable<Goal[]> = this.selectedGoal.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  constructor() { }

  ngOnInit(): void {
    this.goals.push(this.goal);
    this.goals.push(new Goal('Study english'));
    this.goals.push(new Goal('Study programming'));
  }

  private _filter(value: string): Goal[] {
    const filterValue = value.toLowerCase();

    return this.goals.filter(g => g.name.toLowerCase().includes(filterValue));
  }

  displayGoal(goal: Goal): string{
    return goal ? goal.name : '';
  }

}

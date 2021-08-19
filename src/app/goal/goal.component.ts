import { Goal } from './../goal';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020,3,14)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019,6,9)),
    new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up', new Date(2022,1,12)),
    new Goal(4, 'Get Dog Food', 'pupper likes expensive snacks', new Date(2019,0,18)),
    new Goal(5, 'Solve math homework', 'Damn math', new Date(2020,18,8)),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord',new Date (2016,4,6))
  ]
  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: boolean, index: number){
    if(isComplete){
      this.goals.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

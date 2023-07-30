import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanModel } from 'src/app/models/plan-model';
import { PlanService } from 'src/app/services/plan.service';
import { RechargeService } from 'src/app/services/recharge.service';
@Component({
  selector: 'app-popular-plans',
  templateUrl: './popular-plans.component.html',
  styleUrls: ['./popular-plans.component.css']
})
export class PopularPlansComponent implements OnInit {

  allPlans: PlanModel[];
  SearchText = '';
  constructor(private planService: PlanService, private router: Router,
              private rechargeService: RechargeService) { }

  ngOnInit(): void {
    this.displayPlans();
  }

  displayPlans(){
    this.planService.getAllPlans().subscribe(data => {
      this.allPlans=data;
    })
  }


  redirectToRechargePage() {
    this.rechargeService.tab="user/popularPlans";
    this.router.navigate(['user/addRecharge']);
}

}

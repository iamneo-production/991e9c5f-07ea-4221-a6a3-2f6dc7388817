import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { PlanModel } from 'src/app/models/plan-model';
=======
import { Plan } from 'src/app/models/plan';
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
import { PlanService } from 'src/app/services/plan.service';
import { RechargeService } from 'src/app/services/recharge.service';
@Component({
  selector: 'app-popular-plans',
  templateUrl: './popular-plans.component.html',
  styleUrls: ['./popular-plans.component.css']
})
export class PopularPlansComponent implements OnInit {

<<<<<<< HEAD
  allPlans: PlanModel[];
=======
  allPlans: Plan[];
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
  SearchText = '';
  constructor(private planService: PlanService, private router: Router,
              private rechargeService: RechargeService) { }

  ngOnInit(): void {
    this.displayPlans();
  }

  displayPlans(){
    this.planService.getAllPlans().subscribe(data => {
<<<<<<< HEAD
=======
      console.log(data);
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
      this.allPlans=data;
    })
  }


  redirectToRechargePage() {
    this.rechargeService.tab="user/popularPlans";
    this.router.navigate(['user/addRecharge']);
}

}

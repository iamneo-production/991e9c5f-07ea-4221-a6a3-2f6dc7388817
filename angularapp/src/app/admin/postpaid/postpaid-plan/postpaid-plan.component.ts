import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { PlanModel } from 'src/app/models/plan-model';
=======
import { Plan } from 'src/app/models/plan';
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
import { PlanService } from 'src/app/services/plan.service';
@Component({
  selector: 'app-postpaid-plan',
  templateUrl: './postpaid-plan.component.html',
  styleUrls: ['./postpaid-plan.component.css']
})
export class PostpaidPlanComponent implements OnInit {

  constructor(private planService: PlanService, private router: Router) { }

<<<<<<< HEAD
  allPlans: PlanModel[];
=======
  allPlans: Plan[];
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
  SearchText =  '';

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser() {
    this.planService.getAllPlans().subscribe(data => {
      const postpaid = data.filter(plan => plan.planType.toLowerCase()==='postpaid');
      this.allPlans = postpaid;
    })
  }
  goToAddPostpaid() {
    this.router.navigate(["admin/addPostpaid"]);
  }
  editPlan(id: number) {
    this.router.navigate(['admin/editPostpaid', id]);
  }
  deletePlan(id: number) {
    this.planService.deletePlan(id).subscribe(data => {
      alert("postpaid data deleted succesfully...");
      this.displayUser();
    })
  }

}

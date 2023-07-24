import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-prepaid-plan',
  templateUrl: './prepaid-plan.component.html',
  styleUrls: ['./prepaid-plan.component.css']
})
export class PrepaidPlanComponent implements OnInit {

  allPlans: Plan[];

  SearchText= '';

  constructor(private router: Router, private planService: PlanService) { }

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser() {
    this.planService.getAllPlans().subscribe((data)=>{
      const prepaid = data.filter(plan => plan.planType.toLowerCase()==='prepaid');
      this.allPlans=prepaid;
      // console.log(this.allPlans);
    });
  }

  goToAddPrepaid() {
    this.router.navigate(["admin/addPrepaid"])
  }

  updatePlan(id: number) {
    this.router.navigate(['admin/editPrepaid', id]);
  }

  deletePlan(id: number) {
    this.planService.deletePlan(id).subscribe((data)=>{
      alert("prepaid data deleted successfully...")
      this.displayUser();
    })
  }


}

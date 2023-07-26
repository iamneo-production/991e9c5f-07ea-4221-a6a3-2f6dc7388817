import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanModel } from 'src/app/models/plan-model';
import { PlanService } from 'src/app/services/plan.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prepaid-plan',
  templateUrl: './prepaid-plan.component.html',
  styleUrls: ['./prepaid-plan.component.css']
})
export class PrepaidPlanComponent implements OnInit {
  allPlans: PlanModel[];

  SearchText= '';

  constructor(private router: Router, private planService: PlanService) { }

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser() {
    this.planService.getAllPlans().subscribe((data)=>{
      const prepaid = data.filter(plan => plan.planType.toLowerCase()==='prepaid');
      this.allPlans=prepaid;
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


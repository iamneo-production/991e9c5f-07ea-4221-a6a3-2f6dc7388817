import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanModel } from 'src/app/models/plan-model';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-add-prepaid',
  templateUrl: './add-prepaid.component.html',
  styleUrls: ['./add-prepaid.component.css']
})
export class AddPrepaidComponent implements OnInit {

  plans = new PlanModel();
  validationForm: FormGroup;

  constructor(private router: Router, private planService: PlanService) { }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      'planName': new FormControl(null, Validators.required),
      'planType': new FormControl(null, Validators.required),
      'planValidity': new FormControl(null, Validators.required),
      'planPrice': new FormControl(null, Validators.required),
      'planOffers': new FormControl(null, Validators.required),
      'planDescription': new FormControl(null, Validators.required)
    })
  }

  addUser() {
    this.planService.addPlan(this.plans).subscribe(data => {
      alert("prepaid data added successfully");
      this.goToPrepaidList();
    }, error => console.log(error));
  }


  validate: string = "prepaid";
  onSubmit() {
    if (this.plans.planType.toLowerCase() == this.validate) {
      this.addUser();
    } else {
      alert("Enter only prepaid plan details . . .");
    }
  }

  goToPrepaidList() {
    this.router.navigate(['admin/prepaid']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanModel } from 'src/app/models/plan-model';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-add-postpaid',
  templateUrl: './add-postpaid.component.html',
  styleUrls: ['./add-postpaid.component.css']
})

export class AddPostpaidComponent implements OnInit {

  constructor(private planService: PlanService, private router: Router) { }

  plans = new PlanModel();
  validationForm: FormGroup;

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
      alert("postpaid data added successfully...")
      this.goToPostpaidList();
    }, error => console.log(error));
  }
  validate: string = "postpaid";
  onSubmit() {
    if (this.plans.planType.toLowerCase() == this.validate) {
      this.addUser();
    } else {
      alert("Enter postpaid plan details only . . .");
    }
  }

  goToPostpaidList() {
    this.router.navigate(['admin/postpaid']);
  }

}

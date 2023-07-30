import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-update-postpaid',
  templateUrl: './update-postpaid.component.html',
  styleUrls: ['./update-postpaid.component.css']
})
export class UpdatePostpaidComponent implements OnInit {

  id: number;
  postpaid = new Plan();
  validationForm: FormGroup;

  constructor(private planService: PlanService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      'planName': new FormControl(null, Validators.required),
      'planType': new FormControl(null, Validators.required),
      'planValidity': new FormControl(null, Validators.required),
      'planPrice': new FormControl(null, Validators.required),
      'planOffers': new FormControl(null, Validators.required),
      'planDescription': new FormControl(null, Validators.required)
    })



    this.id = this.route.snapshot.params['id'];
    this.planService.getPlanById(this.id).subscribe(data => {
      this.postpaid = data;
    })
  }

  editPlan() {
    this.planService.editPlan(this.id, this.postpaid).subscribe(data => {
      alert("postpaid data updated succesfully...")
      this.goToPostpaidList();

    })

  }

  validate: string = "postpaid";
  onSubmit() {
    if (this.postpaid.planType.toLowerCase() == this.validate) {
      this.editPlan();
    } else {
      alert("Enter only postpaid plan details . . .");
    }
  }
  goToPostpaidList() {
    this.router.navigate(['admin/postpaid']);

  }

}

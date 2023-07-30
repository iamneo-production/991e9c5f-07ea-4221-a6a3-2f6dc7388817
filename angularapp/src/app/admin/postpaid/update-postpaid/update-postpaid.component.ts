import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { PlanModel } from 'src/app/models/plan-model';
=======
import { Plan } from 'src/app/models/plan';
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-update-postpaid',
  templateUrl: './update-postpaid.component.html',
  styleUrls: ['./update-postpaid.component.css']
})
export class UpdatePostpaidComponent implements OnInit {

  id: number;
<<<<<<< HEAD
  postpaid = new PlanModel();
=======
  postpaid = new Plan();
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
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

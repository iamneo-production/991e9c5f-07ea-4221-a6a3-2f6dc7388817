import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanModel } from 'src/app/models/plan-model';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-update-prepaid',
  templateUrl: './update-prepaid.component.html',
  styleUrls: ['./update-prepaid.component.css']
})
export class UpdatePrepaidComponent implements OnInit {

  id: number;
  prepaid = new PlanModel();
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

    this.planService.getPlanById(this.id).subscribe((data) => {
      this.prepaid = data;
    })

  }

  updatePlan() {
    this.planService.editPlan(this.id, this.prepaid).subscribe(data => {
      alert("prepaid data updated successfully...");
      this.goToPrepaidList();
    })
  }

  validate: string = "prepaid";
  onSubmit() {
    // console.log(this.prepaid);
    if (this.prepaid.planType.toLowerCase() == this.validate) {
      this.updatePlan();
    } else {
      alert("Enter only prepaid plan details . . .");
    }
    // this.addUser();
  }

  goToPrepaidList() {
    this.router.navigate(['admin/prepaid']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Addon } from 'src/app/models/addon';
import { AddonService } from 'src/app/services/addon.service';


@Component({
  selector: 'app-update-addon',
  templateUrl: './update-addon.component.html',
  styleUrls: ['./update-addon.component.css']
})
export class UpdateAddonComponent implements OnInit {

  id: number;
  updateplan: Addon = new Addon();
  validationForm: FormGroup;

<<<<<<< HEAD
  constructor(private addonService: AddonService, private router: Router, private route: ActivatedRoute) { }
=======
  constructor(private addonService: AddonService, 
    private router: Router, 
    private route: ActivatedRoute) { }
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13

  ngOnInit(): void {

    this.validationForm = new FormGroup({
      'addonName': new FormControl(null, Validators.required),
      'addonType': new FormControl(null, Validators.required),
      'addonValidity': new FormControl(null, Validators.required),
      'addonPrice': new FormControl(null, Validators.required),
      'addonDetails': new FormControl(null, Validators.required)
    })

    this.id = this.route.snapshot.params['id'];
<<<<<<< HEAD

=======
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
    this.addonService.getAddonPlanById(this.id).subscribe(data => {
      this.updateplan = data;
    }, error => console.log(error));

  }

  updatedPlanDetails() {
    this.addonService.editAddonPlan(this.id, this.updateplan).subscribe(data => {
      alert("Updated Successfully...");
      this.goToAdminHomePage();
    }, error => console.log(error));
  }

  validate: string = "addon";
  OnSubmit() {
    if (this.updateplan.addonType.toLowerCase() == this.validate) {
      this.updatedPlanDetails();
    } else {
      alert("Please enter the addon details only . . .")
    }
  }

  goToAdminHomePage() {
    this.router.navigate(['admin/addons'])
  }

  

}

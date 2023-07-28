import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addon } from 'src/app/models/addon';
import { AddonService } from 'src/app/services/addon.service';

@Component({
  selector: 'app-add-addon',
  templateUrl: './add-addon.component.html',
  styleUrls: ['./add-addon.component.css']
})
export class AddAddonComponent implements OnInit {addplans: Addon = new Addon();
  validationForm: FormGroup;

  constructor(private addonService: AddonService, private router: Router) { }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      'addonName': new FormControl(null, Validators.required),
      'addonType': new FormControl(null, Validators.required),
      'addonValidity': new FormControl(null, Validators.required),
      'addonPrice': new FormControl(null, Validators.required),
      'addonDetails': new FormControl(null, Validators.required)
    })
  }

  addUser() {
    this.addonService.addAddonPlan(this.addplans).subscribe(data => {
      alert("Addon Data Added Successfull ...")
      this.goToAddonsList();
    }, error => console.log(error));
  }

  validate: string = "addon";
  onSubmit() {
    if (this.addplans.addonType.toLowerCase() == this.validate) {
      this.addUser();
    } else {
      alert("Enter only addon plan details . . .");
    }
  }

  goToAddonsList() {
    this.router.navigate(['admin/addons']);
  }

}
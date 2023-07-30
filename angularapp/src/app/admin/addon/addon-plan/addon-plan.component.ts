import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addon } from 'src/app/models/addon';
import { AddonService } from 'src/app/services/addon.service';


@Component({
  selector: 'app-addon-plan',
  templateUrl: './addon-plan.component.html',
  styleUrls: ['./addon-plan.component.css']
})
export class AddonPlanComponent implements OnInit {

  addon: Addon[];
<<<<<<< HEAD
=======
  
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13

  SearchAddon = '';

  constructor(public addonService: AddonService, private router: Router) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.getlist();
  }

  getlist() {
=======
    
    this.getlist();
    console.log(this.addon);
  }

  getlist() {
    console.log(this.addon);
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
    this.addonService.getAllAddonPlans().subscribe(data => {
      this.addon = data;
    }, error => console.log(error));
  }

  goToAddAddon() {
    this.router.navigate(['admin/addAddon']);
  }

  updatelist(id: number) {
    this.router.navigate(['admin/editAddon', id]);
  }

  deletelist(id: number) {
    this.addonService.deleteAddonPlan(id).subscribe(data => {
      alert("Addon Data Deleted Successfully...");
      this.getlist();
    }, error => console.log(error));
  }

}

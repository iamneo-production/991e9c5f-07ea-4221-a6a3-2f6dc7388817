import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addon } from 'src/app/models/addon';
import { AddonService } from 'src/app/services/addon.service';
import { RechargeService } from 'src/app/services/recharge.service';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {

 
  addonData!: Addon[];
  SearchText = '';
  constructor( private addonService: AddonService,
               private router: Router,
               private rechargeService: RechargeService) { }

  ngOnInit(): void {
    this.addonService.getAllAddonPlans().subscribe(
      (data) => {
        this.addonData = data;
      }
    )
  }
  redirectToRechargePage() {
    this.rechargeService.tab = "user/addons";
      this.router.navigate(['user/addRecharge']);
  }

}

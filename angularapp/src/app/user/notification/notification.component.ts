import { Component, OnInit } from '@angular/core';
import { RechargeService } from 'src/app/services/recharge.service';
import { RechargeModel } from 'src/app/models/recharge-model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  recharge!: RechargeModel[];

  constructor(private rechargeService: RechargeService) { }
  ngOnInit(): void {
    this.rechargeService.getAllRecharges().subscribe(
      (data)=>{
        this.recharge = data;
      }
    )
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RechargeService } from 'src/app/services/recharge.service';

// @Component({
//   selector: 'app-recharge-details',
//   templateUrl: './recharge-details.component.html',
//   styleUrls: ['./recharge-details.component.css']
// })
// export class RechargeDetailsComponent implements OnInit {

//   myForm! : FormGroup ;
//   constructor(
//     private rechargeService:RechargeService,
//     private router: Router,
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute
//   ) { }

//   ngOnInit(): void {
//     this.myForm = this.formBuilder.group({
//       rechargeType: ['', Validators.required],
//       email: ['', [Validators.required ,Validators.email]],
//       name: ['', Validators.required],
//       rechargePlan: ['', Validators.required],
//       mobile: ['', [Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
//       rechargePrice: ['', [Validators.required, Validators.min(0)]]
//     });
//   }

//   registerUser(){
//     if (this.myForm.valid){
//       this.rechargeService.addRecharge(this.myForm.value).subscribe(
//         (data) => {
//           this.rechargeService.name = this.myForm.value.name;
//           this.myForm.reset();
//           alert('recharge successfull');
//           this.goToAddReview();
//         }
//       );
//     }else{
//       console.log("failure recharge");
//     }
  

//   }
//   goToAddReview(){
//     this.router.navigate(["user/addReview"]);
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RechargeService } from 'src/app/services/recharge.service';

@Component({
  selector: 'app-recharge-details',
  templateUrl: './recharge-details.component.html',
  styleUrls: ['./recharge-details.component.css']
})
export class RechargeDetailsComponent implements OnInit {

  id: number;
  myForm! : FormGroup ;
  constructor(
    private rechargeService:RechargeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      rechargeType: ['', Validators.required],
      email: ['', [Validators.required ,Validators.email]],
      name: ['', Validators.required],
      rechargePlan: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
      rechargePrice: ['', [Validators.required, Validators.min(0)]]
    });
  }

  registerUser(){
    if (this.myForm.valid){
      this.rechargeService.addRecharge(this.myForm.value).subscribe(
        (data) => {
          this.rechargeService.name = this.myForm.value.name;
          this.myForm.reset();
          alert('recharge successfull');
          this.goToAddReview();
        }
      );
    }else{
      console.log("failure recharge");
    }
  

  }
  goToAddReview(){
    this.router.navigate(["user/addReview"]);
  }

}

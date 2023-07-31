import { Component, OnInit } from '@angular/core';
import { ReviewModel } from 'src/app/models/review-model';
import { ReviewService } from 'src/app/services/review.service';
import { RechargeService } from 'src/app/services/recharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  rating: number| null = null;
  review: string = '';
  stars  = [1, 2, 3, 4, 5];
  name: string = ''
  feedback = new ReviewModel();
  constructor(private rechargeService: RechargeService,
              private reviewService: ReviewService,
              private router: Router) { }

  ngOnInit(): void {
    this.name = this.rechargeService.name;
  }
  

  selectRating(starCount: number) {
    if (this.rating === starCount) {
      this.rating = null;
    } else {
      this.rating = starCount;
    }
  }

  submitFeedback() {
    this.feedback.username = this.name;
    this.feedback.review = this.review;
    this.feedback.rating = this.rating;
    
    this.reviewService.addReview(this.feedback).subscribe(
      (data) => {
        alert("successfully added Review...");
        this.goToPlans();
      }
    );
  }

  goToPlans(){
    console.log(this.rechargeService.tab)
    this.router.navigate([this.rechargeService.tab]);
    // console.log()
  }

}

import { Component, OnInit } from '@angular/core';
import { ReviewModel } from 'src/app/models/review-model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {
  reviews: ReviewModel[];
  stars = [1, 2, 3, 4, 5];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe(
      (data) => this.reviews = data
    );
  }

}

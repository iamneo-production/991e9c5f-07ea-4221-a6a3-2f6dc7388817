<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit} from '@angular/core';
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
import { ReviewModel } from 'src/app/models/review-model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
<<<<<<< HEAD
  styleUrls: ['./show-review.component.css']
=======
  styleUrls: ['./show-review.component.css'],
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
})
export class ShowReviewComponent implements OnInit {
  reviews: ReviewModel[];
  stars = [1, 2, 3, 4, 5];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe(
<<<<<<< HEAD
      (data) => this.reviews = data
=======
      (data) => {
        // console.log(data);
        this.reviews = data
      }
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
    );
  }

}

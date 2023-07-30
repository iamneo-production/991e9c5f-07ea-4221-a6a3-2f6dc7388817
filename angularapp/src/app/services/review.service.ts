import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewModel } from '../models/review-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

<<<<<<< HEAD
  private feedbackURL = "http://localhost:8081/api/admin/review";
=======
  private feedbackURL = "https://8080-eeeabfbfadbabcbefbffdababecfbdcbbefdaddee.project.examly.io/api/admin/review";
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
  constructor(private httpClient: HttpClient) { }

  addReview(feedback: ReviewModel): Observable<Object> {
    console.log(feedback);
      return this.httpClient.post(`${this.feedbackURL}`, feedback);
  }

  getAllReviews(): Observable<ReviewModel[]> {
    return this.httpClient.get<ReviewModel[]>(`${this.feedbackURL}`);
  }
}

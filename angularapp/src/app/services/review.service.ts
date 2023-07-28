import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewModel } from '../models/review-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private feedbackURL = "http://localhost:8081/api/admin/review";
  constructor(private httpClient: HttpClient) { }

  addReview(feedback: ReviewModel): Observable<Object> {
    console.log(feedback);
      return this.httpClient.post(`${this.feedbackURL}`, feedback);
  }

  getAllReviews(): Observable<ReviewModel[]> {
    return this.httpClient.get<ReviewModel[]>(`${this.feedbackURL}`);
  }
}
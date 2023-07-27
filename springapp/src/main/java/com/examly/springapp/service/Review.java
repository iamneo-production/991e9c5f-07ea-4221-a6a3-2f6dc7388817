import com.examly.springapp.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Review;
import com.examly.springapp.repository.ReviewRepo;

@Service
public class ReviewsService {

	@Autowired
	private ReviewsRepo reviewRepo;
	
	public Reviews addReview(Reviews review) {
		return reviewRepo.save(review);
	}
	
	public List<Reviews> getAllReviews(){
		return reviewRepo.findAll();
	}
	
	public Reviews getReviewById(int id) {
		return reviewRepo.findById(id).get();
	}
	
}
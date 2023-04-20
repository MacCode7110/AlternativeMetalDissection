import {getAllReviews} from '../../review_data';
import ReviewList from '../../components/reviews/Review_List';

function alternativeMetalRecordReviews() 
{
    const allReviewsList = getAllReviews();

    return (
        <div>
            <h1> Record Reviews </h1>
            <div> 
                <ReviewList reviews = {allReviewsList}/> 
            </div>
        </div>
    );
}

export default alternativeMetalRecordReviews;
import {getMetalReviews} from '../../review_data';
import ReviewList from '../../components/reviews/Review_List'
import Head from 'next/head'
import Image from 'next/image'

function alternativeMetalRecordReviews() 
{
    const metalReviewList = getMetalReviews();

    return (
        <div>
            <h1> Record Reviews </h1>
            <div> 
                <ReviewList reviews = {metalReviewList}/> 
            </div>
        </div>
    );
}

export default alternativeMetalRecordReviews;
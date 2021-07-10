import {getMetalReviews} from '../../ReviewData';
import ReviewList from '../../Components/Reviews/ReviewList'
import Head from 'next/head'
import Image from 'next/image'

function allNuMetalRecordReviews() 
{
    const metalReviewList = getMetalReviews();

    return (
        <div>
            <h1> All Nu Metal Record Reviews </h1>
            
            <div> 
                <ReviewList reviews = {metalReviewList}/> 
            </div>
        </div>
    );
}

export default allNuMetalRecordReviews;
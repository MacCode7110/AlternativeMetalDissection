import {getMetalReviews} from '../../review_data';
import reviewList from '../../components/reviews/review_list'
import Head from 'next/head'
import Image from 'next/image'
import classes from '/styles/AlternativeMetalRecordReviews.module.css'

function allternativeMetalRecordReviews() 
{
    const metalReviewList = getMetalReviews();

    return (
        <div>
            <h1 className = {classes.allReviewsTitle}> Alternative Metal Record Reviews </h1>
            <div> 
                <reviewList reviews = {metalReviewList}/> 
            </div>
        </div>
    );
}

export default alternativeMetalRecordReviews;
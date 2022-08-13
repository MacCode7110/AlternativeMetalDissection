import {getMetalReviews} from '../../ReviewData';
import ReviewList from '../../Components/Reviews/ReviewList'
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
                <ReviewList reviews = {metalReviewList}/> 
            </div>
        </div>
    );
}

export default alternativeMetalRecordReviews;
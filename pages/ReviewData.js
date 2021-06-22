//We can create a javascript file entirely dedicated to storing data that can be statically loaded onto the website
    //In this case, band reviews can be statically loaded
    //We can declared a variable of type array and allow it to hold a list of objects - each object can hold a set of key/value pairs

import ReviewList from "./MusicReviews/ReviewList";

const reviewsList = [ //a constant array of key-value pairs
{
    id: 'r1',
    title: 'Tallah - Matriphagy',
    review: '...',
    date: '...',
    image: 'images/Tallah Matriphagy Cover.jpg'
},

{
    id: 'r2',
    title: 'Dropout Kings - Audiodope',
    review: '...',
    date: '...',
    image: 'images/Dropout Kings Audiodope.jpg'
},

{
    id: 'r3',
    title: 'Dropout Kings - GlitchGang',
    review: '...',
    date: '...',
    image: 'images/Dropout Kings Glitchgang.jpg'
},

{
    id: 'r4',
    title: 'Weight of Silence - Give the People What they Want',
    review: '...',
    date: '...',
    image: 'images/The Weight of Silence Give The People What They Want.jpg'
},

];

export function getReviewByID(id)
{
    return ReviewList.find(review => (review.id === id)); //if the parameter id is strictly equal to the current review's id in the array of reviews, then true is retruned and sent to the find function as an argument, and an indicator that the corresponding review has been located.
}

export function getAllReviews()
{
    return reviewsList;
}
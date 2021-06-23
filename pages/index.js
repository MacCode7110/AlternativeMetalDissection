import Head from 'next/head'
import Image from 'next/image'
import {Fragment} from 'React'; //React fragment blocks allows us to group togther h1 blocks, list blocks, and more for the purposes of returning from a functionmport styles from '../styles/Home.module.css'
import Link from 'next/link';
import {getMetalReviews} from '../ReviewData';
import reviewList from '../components/reviews/review-list'

//note: when we import a function from an adjacent folder embedded within another subfolder, we must use two dots proceeding the first folder to properly import the function.
//note: When we import a function from a file that exists within the same folder that we are currently inside, we only need to use one dot preceding the file name.
//note: when we import a function that is ALS0 CALLED within our file from a javascript file JUST outside of the current folder (not inside an outer project sub-folder) we are inside, we must use two dots preceeding the file name.

//our domain.com/home

//Note: we do not need to import React above because Next.js is supported by React and hides it behind the scenes
//IMPORTANT: If we want to navigate from the home page to another webpage that is located in a sub-folder, we need to simply create a link 
//that contains the path to the webpage located inside that subfolder
//If we are trying to move between webpages within the same folder and only need to land at a common webpage, we can use dynamic routing, where the destination page is the one that uses brackets in its file name.

//"In React, relative URLs should always be handled by the link tag provided by the React Router, and pure anchor tags <a> should only be used for absolute paths"

//Javascript HTML element reminders:
    //<ul> outputs an unordered list of items, usually rendered as a bulleted list
    //<li> HTML element is used to render an item in a list (<ul>)
    //<h1> HTML element is used to render a header/title
    //<div> HTML element is used to denote a division/section within a JS file that contains other HTML elements - the div element can be styled with CSS
    //h1, h2, h3 tags, etc... are used as HTML header elements to dispaly text
    //img HTML element is used to display an image in the given webpage - images are not inserted into pages, they are referenced, and a space is created for the images to be referenced through the img tag.
    //the time HTML element is used to specifiy the specific time of a post
    //the address HTML element is used to specify contact information for a person or organization

//<reviewList reviews = {reviewList}/>

function HomePage()
{
    const metalReviewList = getMetalReviews();

    return ( 
        <div>
             <reviewList reviews = {metalReviewList}/>
        </div>
            );
} //Above, we are returning a list of reviews by referencing the reviews destructuring variable declared inside the reviewList function, and setting it equal to the reviewList variable that contains the list of all reviews from the getAllReviews function
//The getAllReviews function returns the reviewList, which in the process, is formatted in a certain way by the frontend React code in the components files

export default HomePage; //exports the function HomePage to the web browser to be rendered


import {useRouter} from 'next/router' //in order to access data dynamically (based on the perspective entering this webpage), we need access to the React router
import {getReviewByID} from '../../review_data'
import reviewItem from '../../components/reviews/review_item'
import classes from '/styles/Review.module.css';

function recordReview()
{
    //EXTREMELY IMPORTANT CODE: In order to obtain the ID for an element in the list of review data, we must gain access to the React router and use the query function to obtain the ID of a certain element of data.
    //The query function is very useful:
        //"React Query is a great hook library for managing data requests that completely removes the need to put your remote data inside the global state (making the data more secure). You just need to tell the library where you need to fetch your data, and it will handle caching, background updates, and stale data without any extra code or configuration."
    const router = useRouter();
    const ReviewId = router.query.review_id; //here we are telling the React router where our review data needs to be fetched, which is in the ReviewID dynamic javascript file (this current file).
    const review = getReviewByID(ReviewId); //This is because data is passed through the Reatc router from one webpage to another webpage

    if(!(review))
    {
        return <p> Review not found! </p>
    }

    return (
    <div>
        <div>
            <h1 className = {classes.title}>
                Record Review
            </h1>
        </div>
        <div>
            <reviewItem review = {review}/> 
        </div>
    </div>
        );

} //This web page is dynamic (the contents of this page change depending upon the perspective that views it and the data that is loaded), as indicated by the brackets surrounding the name of this file. This webpage displays an album review, and it is rendered when the link from the ReviewItem React component displayed on the home page is clicked.
//When we pass in an argument to a React component function, the argument name must be the same as the nam eof the destructured variable. Otherwise, the compiler will think that each object property/field is undefined due to a null object.
//Additionally, when we pass in the fields/properties of a list element/object into a React component function, the names of the arguments that store the values of those fields must have the same name as the respective fields themselves.
export default recordReview;
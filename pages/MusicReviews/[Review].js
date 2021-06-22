//our-domain.com/MusicReviews/Review
 
//NOTE: When we name a webpage that requires dynamic routing, we want to name it using surrounding square brackets
 
import { useRouter } from 'next/router'; //here, we are importing certain routing functionality from the Next.js library - this functionality helps us extract the URL component for this web page needed to access it directly without going through subfolders
//useRouter is our hook that gives us the direct component to the Review webpage
 
function ReviewPage()
{
    const router = useRouter(); //now, we have access to a useRouter function
    const reviewComponent = router.query.Review; //this line saves the direct component to this webpage used in the URL
    console.log(router.query);

    return <h1> Review </h1>
}
 
export default ReviewPage; //exports the function ReviewPage to the web browser to be rendered
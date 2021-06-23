
import Link from 'next/Link';
 
function reviewItem(props) //Essentially each instance of the reviewItem function and its return is referenced in the reviewList function, where the full list of album reviews is returned.
{
    const{title, image, date, review, id} = props; //from each element in reviewsList, we expect the data to come in the form of a title, linked image, date, review, and id tag - thus, we use object destructuring to separate the data for each element in the list of reviews into 5 different variables.
    
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', 
    {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }); //we can create a date object in JS, and convert it to a format that is readable through the toLocaleDateString method
 
    const reviewLink = `/reviews/${id}`; //string literal - must use backticks when coding a string literal
 
    //we only need one forward slash before the image variable because the image content in our public folder has already been statically served to this function
    return <li> 
        <img> src = {'/' + image} alt = {title} </img>
        <div> 
            <div>
                <h2> {title} </h2> 
                <div>
                    <time> {humanReadableDate} </time>
                </div>
            </div>
 
            <div>
                <Link href = {reviewLink}>
                Read Review
                 </Link>
            </div>
        </div>
         </li>;
}
 
export default reviewItem;

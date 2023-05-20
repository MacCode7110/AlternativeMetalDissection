/**
 * Returns HTML for a ReviewItemListing
 * @param {*} props 
 * @returns HTML for a ReviewItemListing
 */

function ReviewItemListing(props) //Essentially each instance of the reviewItem function and its return is referenced in the reviewList function, where the full list of album reviews is returned.
{
    const{title, image, date, text, id} = props; //from each element in reviewsList, we expect the data to come in the form of a title, linked image, date, review, and id tag - thus, we use object destructuring to separate the data for each element in the list of reviews into 5 different variables.

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', 
    {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }); //we can create a date object in JS, and convert it to a format that is readable through the toLocaleDateString method
 
    const reviewLink = `../../alternative_metal_record_reviews/${id}`; //string literal - must use backticks when coding a string literal - here, the goal is to route the user to the [ReviewId]/Album Review dynamic webpage
 
    //we only need one forward slash before the image variable because the image content in our public folder has already been statically served to this function
    //className is an attribute similar to src and href, and it stores the CSS items class for use, which is referenced as a class object, as shown through the use of the classes keyword.
    //similar to how src is needed to render an image onto the homepage, the className attribute is needed to render the CSS fonts/colors/styles onto the homepage as well.
    //referencing our ReviewItem CSS module located locally inside of our Reviews folder inside the list HTML bracket or div HTML bracket means that the CSS styling in that file applies to every item/part in the entire block that is returned in this function.
    //note that the React Fragment does not support CSS styling from a file when imported through the className attribute
    
    return (<div className = "box has-background-light">
        <article className = "media">
            <div className = "media-left">
                <figure className = "image is-128x128">
                    <img src = {'/' + image} alt = {title}/>
                </figure>
            </div>
            <div className = "media-content"> 
                <div className = "content"> 
                    <div>
                        <h2> {title} </h2> 
                        <div>
                            <time> Reviewed on {humanReadableDate} </time>
                        </div>
                    </div>
                    <div className = "pt-3">
                        <a className = "button is-outlined is-success" href = {reviewLink}>
                        Read Review
                        </a>
                    </div>
                </div>
        </div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
    </article>
         </div>);
}
 
export default ReviewItemListing;

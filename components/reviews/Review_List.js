import ReviewItemListing from './Review_Item_Listing'

/**
 * Returns HTML for a ReviewList
 * @param {*} props 
 * @returns HTML for a ReviewList
 */

function ReviewList(props) //this function is technically a React function component - it is called a React component because it accepts a properties argument object as a parameter. This argument object contains data that comes from the ReviewData.js file.
{
    const {reviews} = props; //object destructuring example - allows us to extract data from objects and store them into a new variable - this is the same as returning props.items
    //here, we only need one deconstruction variable for props since the properties argument object should just contain the list of reviews.
 
    //map function creates a new array where each new element is the result of applying the argument function to each element in the original array
    //The map function is non-mutating on the original array, nor does it manipulate elements that do not hold values
    //
    return <div>
        <section className = "section is-medium">
            <h1 className = "title has-text-weight-bold"> Record Reviews </h1>
                <ul>        
                {reviews.map(r => 
                <ReviewItemListing key = {r.id} id = {r.id} title = {r.title} image = {r.image} date = {r.date}/> //we must reference each variable part of the object destructuring of the properties object argument in review-item
                )}  
                </ul>
        </section>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
    </div>
}
 
export default ReviewList; //above, there is an inner function r that changes nothing on each element of the original array, therefore allowing the map function to produce an identical array for return.
 
//The big difference between the reviewList and reviewItem React components is that the argument (properties) for a reviewList is the full list of reviews, which is then destructured.
//For a reviewItem, the property argument that is destructured is a review itself

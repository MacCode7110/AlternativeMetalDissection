function ReviewItem(props)
{ 
    const{review} = props;

    return (
        <div>
            <h2> {review.title} </h2>
            <div>
                <img src = {'/' + review.image} alt = {review.title}/> 
            </div>
            <div>
                <p> {review.text} </p>
            </div>
        </div>
    );
}

export default ReviewItem;

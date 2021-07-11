function ReviewItem(props)
{
    const{title, image, date, review, id} = props;

    return (
        <div>
            <h2> {title} </h2>
            <div>
                <img src = {'/' + image} alt = {title}/> 
            </div>
            <div>
                <p> {review} </p>
            </div>
        </div>
    )
}

export default ReviewItem;
/**
 * Returns HTML for a ReviewItem
 * @param {*} props 
 * @returns HTML for a ReviewItem
 */

function ReviewItem(props)
{ 
    const{review} = props;

    return (
        <div>
            <section className = "section is-medium">
                <h1 className = "title has-text-weight-bold"> {review.title} </h1>
                <div className = "box has-background-light">
                     <article className = "media">
                        <div className = "media-left">
                            <figure className = "image is-128x128">
                                <img src = {'/' + review.image} alt = {review.title}/>
                            </figure>
                        </div>
                        <div className = "media-content pt-4">
                            <div className = "content">
                                <div>
                                    Release Date: {review.releaseDate}
                                </div>
                                <div>
                                    Record Label: {review.recordLabel}
                                </div>
                                <div>
                                    Producer: {review.producer}
                                </div>
                                <div>
                                    Recording Studio: {review.recordingStudio}
                                </div>     
                            </div>
                        </div>
                     </article>
                </div>
                <div className = "box has-background-light">
                    <p className = "is-size-4 has-text-weight-normal"> {review.text} </p>
                </div>
                <div className = "box has-background-light">
                    <div className = "is-size-4 has-text-weight-normal"> {review.bibliography} </div>
                </div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
            </section>
        </div>
    );
}

export default ReviewItem;

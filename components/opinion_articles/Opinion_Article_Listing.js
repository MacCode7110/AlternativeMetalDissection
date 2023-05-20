/**
 * Returns HTML for an OpinionArticleListing
 * @param {*} props 
 * @returns HTML for an OpinionArticleListing
 */

function OpinionArticleListing(props)
{
    const{id, title, date} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', 
    {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const opinionArticleLink = `../../opinion_articles/${id}`;

    return (<div className = "box has-background-light">
    <article className = "media">
        <div className = "media-content"> 
            <div className = "content"> 
                <div>
                    <h2> {title} </h2> 
                    <div>
                        <time> Written on {humanReadableDate} </time>
                    </div>
                </div>
                <div className = "pt-3">
                    <a className = "button is-outlined is-success" href = {opinionArticleLink}>
                    Read Opinion Article
                    </a>
                </div>
            </div>
        </div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
    </article>
        </div>);
}

export default OpinionArticleListing;
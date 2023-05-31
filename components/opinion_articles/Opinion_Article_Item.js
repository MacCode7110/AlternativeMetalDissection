/**
 * Returns HTML for an OpinionArticleItem
 * @param {*} props 
 * @returns HTML for an OpinionArticleItem
 */

function OpinionArticleItem(props)
{
    const{opinionArticle} = props;

    return (
        <div>
            <section className = "section is-medium">
                <h1 className = "title has-text-weight-bold"> {opinionArticle.title} </h1>
                <div className = "box has-background-light">
                    <p className = "is-size-4 has-text-weight-normal"> {opinionArticle.text} </p>
                </div>
                <div className = "box has-background-light">
                    <div className = "is-size-4 has-text-weight-normal"> {opinionArticle.bibliography} </div>
                </div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
            </section>
        </div>
    );
}

export default OpinionArticleItem;
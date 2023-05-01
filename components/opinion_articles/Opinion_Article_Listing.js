function OpinionArticleListing(props)
{
    const{title, date, text, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', 
    {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const opinionArticleLink = `../../opinion_articles/${id}`;

    //Work on CSS/HTML components here
}

export default OpinionArticleListing;
import OpinionArticleListing from './Opinion_Article_Listing';

function OpinionArticleList(props)
{
    const {articles} = props;

    return <div>
        <section className = "section is-medium">
            <h1 className = "title has-text-weight-bold"> Opinion Articles </h1>
                <ul>        
                {articles.map(r => 
                <OpinionArticleListing key = {r.id} id = {r.id} title = {r.title} date = {r.date}/> //we must reference each variable part of the object destructuring of the properties object argument
                )}  
                </ul>
        </section>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
    </div>
}

export default OpinionArticleList;

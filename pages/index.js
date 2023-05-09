import {getOpinionArticleByID} from '../opinion_data'

function homePage()
{
    const {id, title} = getOpinionArticleByID('o1');
    const opinionArticleLink = `../../opinion_articles/${id}`;

    return (<div>
        <section className = "section is-medium">
            <div className = "card has-background-light">
                <div className = "card-content">
                    <p className = "title is-1 is-spaced">
                        Placeholder
                    </p>
                    <p className = "subtitle is-3">
                        Read <a href = {opinionArticleLink}> {title} </a>
                    </p>
                </div>
            </div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </section>
    </div>);
} 

export default homePage; //exports the function HomePage to the web browser to be rendered


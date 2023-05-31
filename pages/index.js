import {getOpinionArticleByID} from '../opinion_data'

/**
 * Returns the HTML for the homepage
 * @returns the HTML for the homepage
 */

function homePage()
{
    const {id, title} = getOpinionArticleByID('o1');
    const opinionArticleLink = `../../opinion_articles/${id}`;

    return (<div>
        <section className = "section is-medium">
            <div className = "card has-background-light">
                <div className = "card-content">
                    <div className = "title is-3 is-spaced">
                        DJ scratching and sampling developed at Hip Hop parties in the Bronx, New York in the 1970s. From the aggressive yet admirably self-aware presence of musically-talented Limp Bizkit to the tribal drumming of Brazilian-influenced Soulfly, the energy of DJ turntables and mixers enlivened the personality of Nu Metal bands beginning in the 1990s.  
                    </div>
                    <div className = "subtitle is-5">
                        Read <a href = {opinionArticleLink}> {title} </a>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </section>
    </div>);
} 

export default homePage; //exports the function HomePage to the web browser to be rendered


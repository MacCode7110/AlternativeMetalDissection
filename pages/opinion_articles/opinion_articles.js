import {getAllOpinionArticles} from "../../opinion_data";
import OpinionArticleList from '../../components/opinion_articles/Opinion_Article_List';

/**
 * Gets and stores all opinion articles, and returns the HTML for the list of opinion articles
 * @returns the HTML for the list of opinion articles
 */

function opinionArticles()
{
    const allOpinionArticlesList = getAllOpinionArticles();

    return (
        <div>
            <h1> Opinion Articles </h1>
            <div>
                <OpinionArticleList articles = {allOpinionArticlesList}/>
            </div>
        </div>
    );
}

export default opinionArticles;

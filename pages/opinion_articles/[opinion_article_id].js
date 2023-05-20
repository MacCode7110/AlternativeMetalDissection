import {useRouter} from 'next/router'
import {getOpinionArticleByID} from '../../opinion_data'
import OpinionArticleItem from '../../components/opinion_articles/Opinion_Article_Item'

/**
 * Queries the opinionArticleID and returns the HTML for an opinion article
 * @returns the HTML for an opinion article
 */

function opinionArticle()
{
    const router = useRouter();
    const opinionArticleID = router.query.opinion_article_id; 
    const opinionArticle = getOpinionArticleByID(opinionArticleID);

    if(!(opinionArticle))
    {
        return <p> Opinion Article not found! </p>
    }

    return (
    <div>
        <div>
            <h1>
                Opinion Article
            </h1>
        </div>
        <div>
            <OpinionArticleItem opinionArticle = {opinionArticle}/> 
        </div>
    </div>
        );
}

export default opinionArticle;
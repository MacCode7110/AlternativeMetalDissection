const opinionArticlesList = [
    {
        id: 'o1',
        title: 'The DJ Turntable as an Instrument in Nu Metal Capitalizes on the Upfront Nature that the Genre Thrives On',
        date: '2023-5-10',
        text: 'Opinion coming soon!',
        bibliography: 'Bibliography coming soon!'
    }
];

/**
 * Gets the opinion article corresponding to the argument ID
 * @param {string} i 
 * @returns opinion article
 */

export function getOpinionArticleByID(i) //function works correctly
{
    const r = opinionArticlesList.find(article => (article.id === i));
    console.log(r);
    return opinionArticlesList.find(article => (article.id === i)); //if the parameter i is strictly equal to the current article's id in the array of articles, then true is returned and sent to the find function as an argument, and an indicator that the corresponding article has been located.
}

/**
 * Gets all opinion articles
 * @returns a list of all opinion articles
 */

export function getAllOpinionArticles()
{
    return opinionArticlesList;
}
    
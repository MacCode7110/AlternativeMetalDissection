const opinionArticlesList = [
    {
        id: 'o1',
        title: 'Nu Metal and Post-Grunge Expressed Similar Emotions in Different Ways',
        date: '2023-5-10',
        text: 'Opinion coming soon!',
        image: 'images/opinion_article_stock_photos/DJStockPhoto.jpg',
        bibliography: 'Bibliography coming soon!'
    }
];

export function getOpinionArticleByID(i) //function works correctly
{
    const r = opinionArticlesList.find(article => (article.id === i));
    console.log(r);
    return opinionArticlesList.find(article => (article.id === i)); //if the parameter i is strictly equal to the current review's id in the array of reviews, then true is returned and sent to the find function as an argument, and an indicator that the corresponding review has been located.
}

export function getAllOpinionArticles()
{
    return opinionArticlesList;
}

//TODO: Add sort by date function
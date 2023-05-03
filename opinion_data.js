const opinionArticlesList = [
    {
        id: 'o1',
        title: 'The DJ Element of Nu Metal Capitalizes on the Bravado that the Genre Thrives On',
        date: '2023-5-10',
        text: 'Opinion coming soon!',
        bibliography: 'Bibliography coming soon!'
    },
    {
        id: 'o2',
        title: 'test',
        date: '2023-5-15',
        text: 'Opinion coming soon!',
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
    
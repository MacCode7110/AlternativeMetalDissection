//We can create a javascript file entirely dedicated to storing data that can be statically loaded onto the website
    //In this case, band reviews can be statically loaded
    //We can declared a variable of type array and allow it to hold a list of objects - each object can hold a set of key/value pairs

    const reviewsList = [ //a constant array of key-value pairs, each element is treated as a Javascript object
        {
            id: 'r1',
            title: 'Tallah - Matriphagy',
            text: 'a',
            date: '2021-7-10',
            image: 'images/Tallah Matriphagy Cover.jpg',
            isMetal: true,
        },
        
        {
            id: 'r2',
            title: 'Dropout Kings - Audiodope',
            text: 'b',
            date: '2021-7-10',
            image: 'images/Dropout Kings Audiodope.jpg',
            isMetal: true,
        },
        
        {
            id: 'r3',
            title: 'Dropout Kings - GlitchGang',
            text: 'c',
            date: '2021-7-10',
            image: 'images/Dropout Kings Glitchgang.jpg',
            isMetal: true,
        },
        
        {
            id: 'r4',
            title: 'Weight of Silence - Give the People What they Want',
            text: 'd',
            date: '2021-7-10',
            image: 'images/The Weight of Silence Give The People What They Want.jpg',
            isMetal: true,
        },
        
        ];
        
        export function getReviewByID(i) //function works correctly
        {
            const r = reviewsList.find(review => (review.id === i));
            console.log(r);
            return reviewsList.find(review => (review.id === i)); //if the parameter i is strictly equal to the current review's id in the array of reviews, then true is returned and sent to the find function as an argument, and an indicator that the corresponding review has been located.
        }
        
        export function getMetalReviews()
        {
            return reviewsList.filter((review) => review.isMetal);
        }
        
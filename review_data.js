//We can create a javascript file entirely dedicated to storing data that can be statically loaded onto the website
    //In this case, band reviews can be statically loaded
    //We can declared a variable of type array and allow it to hold a list of objects - each object can hold a set of key/value pairs

    const reviewsList = [ //a constant array of key-value pairs, each element is treated as a Javascript object
        {
            id: 'r1',
            title: 'Hinge - Elemental Evil',
            text: 'a',
            date: '2023-5-1',
            image: 'images/HingeElementalEvilAlbumCover.jpg',
            isMetal: true
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
        
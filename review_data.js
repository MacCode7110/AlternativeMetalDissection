//We can create a javascript file entirely dedicated to storing data that can be statically loaded onto the website
    //In this case, band reviews can be statically loaded
    //We can declared a variable of type array and allow it to hold a list of objects - each object can hold a set of key/value pairs

    const reviewsList = [ //a constant array of key-value pairs, each element is treated as a Javascript object
        {
            id: 'r1',
            title: 'Deftones - Adrenaline',
            text: 'Review coming soon!',
            date: '2023-5-1',
            releaseDate: '1995-3-10',
            recordLabel: 'Maverick',
            producer: 'Terry Date, Ross Robinson',
            recordingStudio: 'Bad Animals',
            image: 'images/DeftonesAdrenalineAlbumCover.jpg',
            bibliography: ''
        },   
        {
            id: 'r2',
            title: 'Fear Factory - Obsolete',
            text: 'Review coming Soon!',
            date: '2023-5-10',
            releaseDate: '',
            recordLabel: '',
            producer: '',
            recordingStudio: '',
            image: 'images/FearFactoryObsoleteAlbumCover.jpg',
            bibliography: ''
        },
        {
            id: 'r3',
            title: 'Spineshank - Strictly Diesel',
            text: 'Review coming Soon!',
            date: '2023-5-15',
            releaseDate: '',
            recordLabel: '',
            producer: '',
            recordingStudio: '',
            image: 'images/SpineshankStrictlyDieselAlbumCover.jpg',
            bibliography: ''
        },
        {
            id: 'r4',
            title: 'Coal Chamber - Coal Chamber',
            text: 'Review coming soon!',
            date: '2023-5-20',
            releaseDate: '',
            recordLabel: '',
            producer: '',
            recordingStudio: '',
            image: 'images/CoalChamberCoalChamberAlbumCover.jpg',
            bibliography: ''
        },
        {
            id: 'r5',
            title: '40 Below Summer - Invitation to the Dance',
            text: 'Review coming soon!',
            date: '2023-5-25',
            releaseDate: '',
            recordLabel: '',
            producer: '',
            recordingStudio: '',
            image: 'images/40BelowSummerInvitationtotheDanceAlbumCover.jpg',
            bibliography: ''
        }
        ];
        
        export function getReviewByID(i) //function works correctly
        {
            const r = reviewsList.find(review => (review.id === i));
            console.log(r);
            return reviewsList.find(review => (review.id === i)); //if the parameter i is strictly equal to the current review's id in the array of reviews, then true is returned and sent to the find function as an argument, and an indicator that the corresponding review has been located.
        }
        
        export function getAllReviews()
        {
            return reviewsList;
        }
        
//We can create a javascript file entirely dedicated to storing data that can be statically loaded onto the website
    //In this case, band reviews can be statically loaded
    //We can declared a variable of type array and allow it to hold a list of objects - each object can hold a set of key/value pairs

    const reviewsList = [ //a constant array of key-value pairs, each element is treated as a Javascript object
        {
            id: 'r1',
            title: '40 Below Summer - Invitation To The Dance',
            text: 'Review coming soon!',
            date: '2023-5-10',
            releaseDate: '2001-10-16',
            recordLabel: 'London-Sire',
            producer: 'Garth Richardson',
            recordingStudio: 'Cello Studios, Sound City Studios',
            image: 'images/album_covers/40BelowSummerInvitationToTheDanceAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },   
        {
            id: 'r2',
            title: 'Factory 81 - Mankind',
            text: 'Review coming soon!',
            date: '2023-5-15',
            releaseDate: '2000-10-3',
            recordLabel: 'Uptown Records, Universal Music Group',
            producer: 'Factory 81',
            recordingStudio: 'N/A',
            image: 'images/album_covers/Factory81MankindAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },
        {
            id: 'r3',
            title: 'Five Pointe O - Untitled',
            text: 'Review coming soon!',
            date: '2023-5-20',
            releaseDate: '2002-3-19',
            recordLabel: 'Roadrunner Records',
            producer: 'Colin Richardson',
            recordingStudio: 'Sonic Ranch Studios',
            image: 'images/album_covers/FivePointeOUntitledAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },
        {
            id: 'r4',
            title: 'Kill II This - Deviate',
            text: 'Review coming soon!',
            date: '2023-5-5',
            releaseDate: '1998-10-6',
            recordLabel: 'Visible Noise',
            producer: 'Andy Sneap',
            recordingStudio: 'DEP International Studios',
            image: 'images/album_covers/KillIIThisDeviateAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },
        {
            id: 'r5',
            title: 'Pulse Ultra - Headspace',
            text: 'Review coming soon!',
            date: '2023-5-1',
            releaseDate: '2002-7-16',
            recordLabel: 'Atlantic Records',
            producer: 'Neal Avron',
            recordingStudio: 'Cello Studios',
            image: 'images/album_covers/PulseUltraHeadspaceAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        }
        ];

        reviewsList.sort((a,b) => { //sort function called right on line 68
            const aToUpperCase = a.title.toUpperCase();
            const bToUpperCase = b.title.toUpperCase();

            if(aToUpperCase < bToUpperCase)
            {
                return -1;
            }
            else if(aToUpperCase > bToUpperCase)
            {
                return 1;
            }
            else 
            {
                return 0;
            }
        });
        
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
        
//We can create a javascript file entirely dedicated to storing data that can be statically loaded onto the website
    //In this case, band reviews can be statically loaded
    //We can declared a variable of type array and allow it to hold a list of objects - each object can hold a set of key/value pairs

    const reviewsList = [ //a constant array of key-value pairs, each element is treated as a Javascript object
        {
            id: 'r1',
            title: 'Tallah - The Generation of Danger',
            text: 'Review coming soon!',
            date: '2023-5-10',
            releaseDate: '2022-11-18',
            recordLabel: 'Earache',
            producer: 'Josh Schroeder',
            recordingStudio: 'N/A',
            image: 'images/album_covers/TallahTheGenerationofDangerAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },   
        {
            id: 'r2',
            title: 'Tetrarch - Unstable',
            text: 'Review coming soon!',
            date: '2023-5-15',
            releaseDate: '2021-4-30',
            recordLabel: 'Napalm Records',
            producer: 'Dave Otero, Joshua Fore, Diamond Rowe',
            recordingStudio: 'N/A',
            image: 'images/album_covers/TetrarchUnstableAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },
        {
            id: 'r3',
            title: 'Ocean Grove - Flip Phone Fantasy',
            text: 'Review coming soon!',
            date: '2023-5-20',
            releaseDate: '2020-3-13',
            recordLabel: 'UNFD',
            producer: 'Sam Bassal',
            recordingStudio: 'N/A',
            image: 'images/album_covers/OceanGroveFlipPhoneFantasyAlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },
        {
            id: 'r4',
            title: 'Diamond Construct - DCX2',
            text: 'Review coming soon!',
            date: '2023-5-5',
            releaseDate: '2020-8-28',
            recordLabel: 'Greyscale Records',
            producer: 'Diamond Construct, Lance Prenc',
            recordingStudio: 'N/A',
            image: 'images/album_covers/DiamondConstructDCX2AlbumCover.jpg',
            bibliography: 'Bibliography coming soon!'
        },
        {
            id: 'r5',
            title: 'Code Orange - Underneath',
            text: 'Review coming soon!',
            date: '2023-5-1',
            releaseDate: '2020-3-13',
            recordLabel: 'Roadrunner Records',
            producer: 'Jami Morgan, Nick Raskulinecz, Will Yip',
            recordingStudio: 'N/A',
            image: 'images/album_covers/CodeOrangeUnderneathAlbumCover.jpg',
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
        
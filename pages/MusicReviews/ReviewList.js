//our-domain.com/MusicReviews/ReviewList
import { Fragment } from 'React'; //React fragment blocks allows us to group togther h1 blocks, list blocks, and more for the purposes of returning from a function
import Link from 'next/link';

//The ul block allows us to create a list of links on our webpage
//The li block allows us to create a title for each link in the list
//The a brackets denote that a link is being constructed on the website
    //a represents an anchor element
    //When, we click on any of the links, the website takes us to the review page because [Review].js imports useRouter, which allows for dynamic page routing
//Whenever we click on a link below, we are using dynamic (direct) routing to generate another webpage

//To fully utilize Next.js and help facilitate the dynamic routing process, we must use the Link library instead of a tags
//Using Link instead of a blocks is extremely important because it prevents the broswer from needing to send a request to the server to render a new HTML page
    //Instead, Link enables the browser/client-side to render the new web page, which is a more efficient process assuming good internet connection
    //Noticeably, it can be seen that using Link blocks instead of a tags does not require the page to reload when performing dynamic routing
//Notes
    //When we declare a Link object, the name href matters, it is a Next attribute, it NEEDS to be there: a link object simply holds the relative path to that link
    //Also, the title of the link (highlighted in white) is independent of the path that the link object holds

//"In React, relative URLs should always be handled by the link tag provided by the React Router, and pure anchor tags <a> should only be used for absolute paths"

function ReviewList()
{
    return (
    <Fragment> 
        <h1> 
            Music Reviews 
        </h1>
        <ul> 
            <li> <Link href ='/MusicReviews/Tallah: Matriphagy'> Tallah: Matriphagy </Link> </li> 
            <li> <Link href = '/MusicReviews/Dropout Kings: Audiodope'> Dropout Kings: Audiodope </Link> </li>
            <li> <Link href = '/MusicReviews/Dropout Kings: GlitchGang'> Dropout Kings: GlitchGang </Link> </li>
            <li> <Link href = '/MusicReviews/The Weight of Silence: Give the People What they Want'> The Weight of Silence: Give the People What they Want </Link> </li>
        </ul>
    </Fragment>          
    );
}
 
export default ReviewList;

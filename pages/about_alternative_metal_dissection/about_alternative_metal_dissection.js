import Head from 'next/head'
//import Image from 'next/image' //the image element from Next.js allows for fast image loading and optimization when deploying to vercel
//also note that the image elemet must also include height and width attributes
import classes from '/styles/AboutAlternativeMetalDissection.module.css'

function aboutAlternativeMetalDissection()
{
    return (
    <div>
        <div>
            <h1 className = {classes.aboutTitle}> About Alternative Metal Dissection </h1>
        </div>
        <div>
            <p className = {classes.aboutParagraph}> Alternative Metal Dissection is a website project dedicated to discussing music that is categorized as Alternative Metal or is influenced by Alternative Metal. Alternative Metal Dissection contains reviews, analysis, and opinion-based commentary about Alternative Metal records released across different eras of Heavy Metal music. In particular, Alternative Metal Dissection focuses on records that are part of or are influenced by the Nu Metal era, which began in the mid 1990s and declined to an extent in mainstream popularity by the mid 2000s. Alternative Metal Dissection also discusses records that are not labeled as or are influenced by Nu Metal but are still part of the larger breadth of Alternative Metal. In addition, Alternative Metal Dissection considers records influenced by Alternative Metal that are not labeled as Heavy Metal themselves. Website visitors can submit requests for Alternative Metal Dissection to review records. </p>
        </div> 
    </div>
    ); //^method of loading an image in Javascript normally, without the factor of being a React component
}

export default aboutAlternativeMetalDissection; //exports the function, which is called when a devleopment instance of the website is run in terminal

//When we export a function, object, or class, we are allowing another javascript file to import the function, object, or class to be used in that program
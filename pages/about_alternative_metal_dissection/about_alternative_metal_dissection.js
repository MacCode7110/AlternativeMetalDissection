import Head from 'next/head'
//import Image from 'next/image' //the image element from Next.js allows for fast image loading and optimization when deploying to vercel
//also note that the image elemet must also include height and width attributes
import classes from '/styles/AboutAlternativeMetalDissection.module.css';

function aboutAlternativeMetalDissection()
{
    return (
    <div>
        <div>
            <h1 className = {classes.aboutTitle}> About Alternative Metal Dissection </h1>
        </div>
        <div>
            <p className = {classes.aboutParagraph}>  </p>
        </div> 
    </div>
    ); //^method of loading an image in Javascript normally, without the factor of being a React component
}

export default aboutAlternativeMetalDissection; //exports the function, which is called when a devleopment instance of the website is run in terminal

//When we export a function, object, or class, we are allowing another javascript file to import the function, object, or class to be used in that program
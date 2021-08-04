import Head from 'next/head'
import Image from 'next/image' //the image element from Next.js allows for fast image loading and optimization when deploying to vercel
//also note that the image elemet must also include height and width attributes
import classes from '/styles/AboutTheNuMetalPowerZone.module.css';

function aboutTheNuMetalPowerZone()
{
    return (
    <div>
        <div>
            <h1 className = {classes.aboutTitle}> About The Nu Metal Power Zone </h1>
        </div>
        <div>
            <p> The Nu Metal Power Zone is a website project designed and programmed by Matthew McAlarney. 
            Matthew McAlarney is a Computer Science Major at Worcester Polytechnic Institute who has a love for application development. 
            Matthew McAlarney designed and programmed the Nu Metal Power Zone as a means of learning and implementing Javascript technologies such as React.js and Next.js.
            In addition, he also shares a passion for Nu Metal! Nu Metal is a diverse subgenre of Heavy Metal music that incorporates Hip Hop, Industrial, Grunge, Hardcore Punk, R&B, Goth, and World Music with the powerful groove of bulky, downtuned 7-string guitars.
            A number of Matthew McAlarney's favorite bands that experimented with Nu Metal during its original wave are Deftones, Sevendust, KoRn, Fear Factory, Soulfly, Chimaira, Slipknot, Nothingface, and Limp Bizkit!
            The Nu Metal Power Zone makes a strong contribution to the Heavy Metal Music community, and generates support for many of the new, developing bands that are largely influenced by Nu Metal.
            Matthew McAlarney writes a number of reviews for recent records that combine Nu Metal with Metalcore and Trap influences!
            Viewers can also submit requests through the Nu Metal Power Zone to Matthew McAlarney to review certain records! </p>
        
            <p> Contact Information for Matthew McAlarney: <br />
            <br />
                Email: mattmcal88@gmail.com <br />
            </p>
        </div>
        <div>
            <Image src = "/Images/PictureOfMeForNuMetalPowerZone.jpg" alt = "Matthew McAlarney" width = "400" height = "500"/> 
        </div>   
    </div>
    ); //^method of loading an image in Javascript normally, without the factor of being a React component
}

export default aboutTheNuMetalPowerZone; //exports the function, which is called when a devleopment instance of the website is run in terminal

//When we export a function, object, or class, we are allowing another javascript file to import the function, object, or class to be used in that program
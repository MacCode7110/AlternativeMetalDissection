import Head from 'next/head'
import Image from 'next/image'

function personalInformation()
{
    return <h1>Personal Information and Contact</h1>
}

export default personalInformation; //exports the function, which is called when a devleopment instance of the website is run in terminal

//When we export a function, object, or class, we are allowing another javascript file to import the function, object, or class to be used in that program
import Head from 'next/head'
import Image from 'next/image'

function recordReviewRequest()
{
    return (
    <div>
        <div>
            <h1> Send a Request for a Record Review! </h1>
        </div>
        <div>
            <p> Please enter the required information below, and click Submit Record Reuqest Form! </p>
        </div>
        <div>
            <form method = "post" action = "RecordRequests.php" name = "Record Request Form"> <br />
                Record Name: <input type = "text" size = "50" recordName = "Record Name" /> <br />
                Band Name: <input type = "text" size = "50" bandName = "Band Name" /> <br />
                Your Email: <input type = "text" size = "50" email = "Email" /> <br />
                <button type = "submit" value = "Submit"> Submit Record Request Form </button>
            </form>
        </div>
    </div>
    );
}

export default recordReviewRequest; //In order to make a proper form that sends me an email, we need to use some backend code with PHP - PHP is a scripting language commonly used for backend servers
//<form> is a specific HTML element that is used to generate a form on the given webpage
//The method attribute represents the means of sending out the informaton entered into the form; the value "post" means that data is being sent to the server from the webpage
//The action attribute represents the destination for the data that is entered into the HTML form - in this case, the destination for our form data is the form server handled by the PHP file
//The name attribute sets the name of the form
//The input HTML element generates an input box for users to enter information into
    //The type attribute specifies the type of data to be entered, and the size atribute sets the size of the input box
    //The type attribute defines which type of input control to display and, depending on which type is included, provides for some validation in supporting browsers. The default type is text , displaying a single-line text field, if the type is set to text or if the attribute is not specified.
    //The size attribute sets the length of each input box

    //Custom attributes can be set after the above two attributes as well
//The button HTML element sets a button that can be pressed to submit the information entered into the form
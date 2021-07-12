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
            <p> Please enter the required information below, and click submit! </p>
        </div>
        <div>
            <form method = "post" action = "RecordRequests.php" name = "Record Request Form"> <br />
                Record Name: <input type = "text" size = "20" recordName = "Record Name" /> <br />
                Band Name: <input type = "text" size = "20" bandName = "Band Name" /> <br />
                <button type = "submit" value = "submit"> Submit Record Request Form </button>
            </form>
        </div>
    </div>
    );
}

export default recordReviewRequest; //In order to make a proper form that sends me an email, we need to use some backend code with PHP - PHP is a scripting language commonly used for backend servers
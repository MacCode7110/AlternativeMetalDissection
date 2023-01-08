function recordReviewRequest()
{
    return (
        <body>
            <section class = "section is-medium">
                <h1 class = "title has-text-weight-bold">
                    Request a Record for Review
                </h1>
                <form onsubmit = "validateRecordRequestReviewForm()" action = "https://formsubmit.co/mattmcal88@gmail.com" method = "POST" name = "Record Request Form"> <br />
                    <input type = "hidden" name = "_next" value = "https://alternative-metal-dissection.vercel.app/record_review_request/thank_you"/>
                    <div class="field">
                        <label for = "recordname" class="label is-size-4 has-text-weight-normal"> Record Name </label>
                            <div class="control">
                                <input class="input is-medium is-success" id = "recordname" type="text" placeholder="Record Name" name = "Record Name"/> <br />
                            </div>
                    </div>
                    <div class="field">
                        <label for = "bandname" class = "label is-size-4 has-text-weight-normal"> Band Name </label>
                            <div class="control">
                                <input class="input is-medium is-success" id = "bandname" type="text" placeholder="Band Name" name = "Band Name"/> <br />
                            </div>
                    </div>
                    <div class="control">
                        <button type = "submit" class="button is-link is-size-4 has-text-weight-normal is-success"> Submit Request </button>
                    </div>
                </form>
            </section>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </body>
    );
}

export default recordReviewRequest;

function validateRecordRequestReviewForm() {
    const recordName = document.querySelector('#recordname').value;
    const bandName = document.querySelector('#bandname').value;

    if(recordName === '' || recordName == null) { //=== compares both the data types and values of the operands, while == performs a data type conversion BEFORE the comparison of the values of the operands.
        alert('Record Name is a required field');
        return false;
    }

    if(bandName === '' || recordName == null) {
        alert('Band Name is a required field');
        return false;
    }

    if(recordName.length > 125)
    {
        alert('Record Name must be no longer than 125 characters');
        return false;
    }

    if(bandName.length > 125)
    {
        alert('Band Name must be no longer than 125 characters');
        return false;
    }
}

//For attribute is used in labels, and it establishes (gives the label) an id for the associated input.

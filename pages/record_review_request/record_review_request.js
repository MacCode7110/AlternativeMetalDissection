function recordReviewRequest()
{
    return (
            <div>
                <section className = "section is-medium">
                    <h1 className = "title has-text-weight-bold">
                    Request a Record for Review
                    </h1>
                    <form action = "https://formsubmit.co/mattmcal88@gmail.com" method = "POST" name = "Record Request Form"> <br />
                        <input type = "hidden" name = "_next" value = "https://alternative-metal-dissection.vercel.app/record_review_request/thank_you"/>
                            <div className="field">
                                <label htmlFor = "recordname" className="label is-size-4 has-text-weight-normal"> Record Name </label>
                                    <div className="control">
                                        <input className="input is-medium is-success" id = "recordname" type="text" placeholder="Record Name" name = "Record Name"
                                            required
                                            minLength = "1"
                                            maxLength = "125"
                                        /> <br />
                                    </div>
                            </div>
                            <div className="field">
                                <label htmlFor = "bandname" className = "label is-size-4 has-text-weight-normal"> Band Name </label>
                                    <div className="control">
                                        <input className="input is-medium is-success" id = "bandname" type="text" placeholder="Band Name" name = "Band Name"
                                            required
                                            minLength = "1"
                                            maxLength = "125"
                                    /> <br />
                                    </div>
                            </div>
                            <div className="control">
                                <button type = "submit" className="button is-link is-size-4 has-text-weight-normal is-success"> Submit Request </button>
                            </div>
                    </form>
                </section>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
            </div>
    );
}

export default recordReviewRequest;

//For attribute is used in labels, and it establishes (gives the label) an id for the associated input.

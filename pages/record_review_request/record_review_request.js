function recordReviewRequest()
{
    return (
        <body>
            <section class = "section is-medium">
                <h2 class = "title">
                    Request a Record for Review
                </h2>
                <form action = "https://formsubmit.co/mattmcal88@gmail.com" method = "POST" name = "Record Request Form"> <br />
                    <input type = "hidden" name = "_next" value = "https://alternative-metal-dissection.vercel.app/record_review_request/thank_you"/>
                    <div class="field">
                        <label class="label is-medium"> Record Name </label>
                            <div class="control">
                                <input class="input is-medium is-success" type="text" placeholder="Record Name" name = "Record Name"/> <br />
                            </div>
                    </div>
                    <div class="field">
                        <label class = "label is-medium"> Band Name </label>
                            <div class="control">
                                <input class="input is-medium is-success" type="text" placeholder="Band Name" name = "Band Name"/> <br />
                            </div>
                    </div>
                    <div class="control">
                        <button class="button is-link is-medium is-success"> Submit Request </button>
                    </div>
                </form>
            </section>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </body>
    );
}

export default recordReviewRequest;
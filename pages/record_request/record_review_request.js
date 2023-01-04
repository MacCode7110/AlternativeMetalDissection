function recordReviewRequest()
{
    return (
    <form action = "https://formsubmit.co/mattmcal88@gmail.com" method = "POST" name = "Record Request Form">
        <div class="field">
            <label class="label"> Record Name </label>
                <div class="control">
                    <input class="input" type="text" placeholder="Record Name"/>
                </div>
        </div>
        <div class="field">
            <label class = "label"> Band Name </label>
                <div class="control">
                    <input class="input" type="text" placeholder="Band Name"/>
                </div>
        </div>
        <div class="control">
            <button class="button is-link"> Submit Request </button>
        </div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
    </form>
    );
}

export default recordReviewRequest;
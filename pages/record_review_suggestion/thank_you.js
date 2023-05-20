/**
 * Returns the HTML for the thank you page following a submitted suggestion
 * @returns the HTML for the thank you page following a submitted suggestion
 */

function thankYou()
{
    return (
        <div>
            <section className = "section is-large has-text-centered">
                <h2 className = "title is-size-4 has-text-weight-normal">
                    Thank you for submitting a suggestion for a record review! The submission will be considered for a review!
                </h2>
            </section>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </div>
    );
}

export default thankYou;
function homePage()
{
    return (
            <html lang = "en" class = "has-background-white">
                <body>
                <nav class = "navbar is-fixed-top has-shadow has-background-danger-light">
                <div class = "navbar-menu" id = "nav-links">
                    <div class = "navbar-start">
                        <a class = "navbar-item is-size-6 has-text-dark has-text-weight-bold is-family-monospace" href = "https://alternative-metal-dissection.vercel.app">
                            Alternative Metal Dissection
                        </a>
                        <a class = "navbar-item is-size-6 has-text-dark has-text-weight-bold is-family-monospace" href = '/about_alternative_metal_dissection/about_alternative_metal_dissection'>
                            About Alternative Metal Dissection
                        </a>
                        <a class = "navbar-item is-size-6 has-text-dark has-text-weight-bold is-family-monospace" href = '/alternative_metal_record_reviews/alternative_metal_record_reviews'>
                            Record Reviews
                        </a>
                        <a class = "navbar-item is-size-6 has-text-dark has-text-weight-bold is-family-monospace" href = "https://alternative-metal-dissection.vercel.app/record_review_request/index.html">
                            Request a Record for Review
                        </a>
                    </div>
                </div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
                </nav>
                </body>
            </html>
        );   
} 

export default homePage; //exports the function HomePage to the web browser to be rendered


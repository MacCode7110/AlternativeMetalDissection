import NavBar from '../components/Nav_Bar'

function MyApp({ Component, pageProps }) {
  return <>
  <NavBar/>
  <Component {...pageProps} /> </>
}

//the app.js file is the parent React component - it is entirely responsible for rendering each of the other React components that are exported from their respective files, which are used to generate the website

export default MyApp;

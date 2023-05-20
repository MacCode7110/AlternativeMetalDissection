import NavBar from '../components/Nav_Bar'

/**
 * Renders every React component and the navigation bar component on every webpage
 * @param {*} param0 
 * @returns navigation bar component and the current React component being rendered
 */

function MyApp({ Component, pageProps }) {
  return <>
  <NavBar/>
  <Component {...pageProps} /> </>
}

//the app.js file is the parent React component - it is entirely responsible for rendering each of the other React components that are exported from their respective files, which are used to generate the website

export default MyApp;

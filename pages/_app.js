import 'bootstrap/dist/css/bootstrap-grid.min.css';

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <main>
    <Component {...pageProps} />
  </main>
}
export default MyApp

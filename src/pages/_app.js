import Layout from "../layouts/layout";
import "../scss/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;

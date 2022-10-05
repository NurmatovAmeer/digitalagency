import Layout from "../layouts/layout";
import "../scss/globals.scss";
import { Provider } from 'react-redux';
import {initStore} from '../redux/rootReducer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={initStore}>
      <div className="app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    </Provider>
  );
}

export default MyApp;

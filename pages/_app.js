import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
// import "@themesberg/flowbite";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

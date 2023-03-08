//styles - this is where all the stylnig is connected to the app
import '@/styles/globals.css'
import "../styles/dashboard.css";
import "../styles/header.css";
import "../styles/recipeList.css";
import "../styles/recipeDetails.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

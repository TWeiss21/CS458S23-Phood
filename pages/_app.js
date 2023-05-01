import '@/styles/globals.css'
import "../styles/dashboard.css";
import "../styles/header.css";
import "../styles/recipeList.css";
import "../styles/recipeDetails.css";
import "../styles/shoppingList.css";
import "../styles/AddRecipeModal.css";
import "../styles/NewApiModal.css";
import "../styles/ExportModal.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

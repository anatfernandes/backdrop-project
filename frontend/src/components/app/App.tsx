import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "../../contexts";

function App() {
  const [t] = useTranslation("global");

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ToastContainer />

        <p>{t("Coming")}</p>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

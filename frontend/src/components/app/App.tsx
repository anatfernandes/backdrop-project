import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "../../contexts";
import { useLocale } from "../../hooks";

function App() {
  const { t } = useLocale();

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

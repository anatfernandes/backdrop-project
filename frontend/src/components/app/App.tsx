import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../../styles/globalstyles/globalStyles";

function App() {
  const [t] = useTranslation("global");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <p>{t("Coming")}</p>
    </BrowserRouter>
  );
}

export default App;

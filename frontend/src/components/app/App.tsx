import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "../../contexts";
import { SignPage } from "../../pages";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ToastContainer />

        <Routes>
          <Route path="/sign-up" element={<SignPage page="sign-up" />} />
          <Route path="/sign-in" element={<SignPage page="sign-in" />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider, UserContextProvider } from "../../contexts";
import { SignPage } from "../../pages";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ToastContainer />

        <UserContextProvider>
          <Routes>
            <Route path="/sign-up" element={<SignPage page="sign-up" />} />
            <Route path="/sign-in" element={<SignPage page="sign-in" />} />
          </Routes>
        </UserContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

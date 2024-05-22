import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider, UserContextProvider } from "../../contexts";
import { PrivatePage } from "../private-page";
import { Header } from "../header";
import { Footer } from "../footer";
import { HomePage, SavePostPage, SignPage } from "../../pages";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ToastContainer />

        <UserContextProvider>
          <Routes>
            <Route path="/sign-up" element={<SignPage page="sign-up" />} />
            <Route path="/sign-in" element={<SignPage page="sign-in" />} />

            <Route
              path="/"
              element={
                <PrivatePage>
                  <Header />
                  <Outlet />
                  <Footer />
                </PrivatePage>
              }
            >
              <Route path="/post" element={<SavePostPage />} />
              <Route path="/home" element={<HomePage />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider, UserContextProvider } from "../../contexts";
import { PrivatePage } from "../private-page";
import { Preferences } from "../preferences";
import { Header } from "../header";
import { Footer } from "../footer";
import {
  ExplorePage,
  HomePage,
  SavePostPage,
  SettingsPage,
  SignPage,
  UserPage,
} from "../../pages";

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
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/users/:id" element={<UserPage />} />

              <Route path="settings" element={<SettingsPage />}>
                <Route path="profile" element={<></>} />
                <Route path="preferences" element={<Preferences />} />
                <Route path="*" element={<Navigate to="profile" replace />}></Route>
                <Route path="" element={<Navigate to="profile" replace />}></Route>
              </Route>
            </Route>
          </Routes>
        </UserContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

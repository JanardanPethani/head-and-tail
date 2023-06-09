import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home-page/HomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import AboutPage from "./pages/about-page/AboutPage";
import HeadAndTailPage from "./pages/head-and-tail-page/HeadAndTailPage";
import ProtectedRoute from "./ProtectedRoute";
import AuthenticateUserPage from "./pages/auth-page/AuthenticateUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticateUserPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/head-and-tail" element={<HeadAndTailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterPage from "./containers/register/RegisterPage";
import ForgotPasswordPage from "./containers/forgotPassword/ForgotPasswordPage";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./containers/home/HomePage"));
const TeamsPage = lazy(() => import("./containers/teams/TeamsPage"));
const EventsPage = lazy(() => import("./containers/events/EventsPage"));
const AboutPage = lazy(() => import("./containers/about/AboutPage"));
const LoginPage = lazy(() => import("./containers/login/LoginPage"));
const NotFoundPage = lazy(() => import("./containers/notFound/NotFoundPage"));

function App() {

  return (
    <div>
        <Suspense fallback={<Loader />}>
          <BrowserRouter path="/">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/teams" element={<TeamsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
    </div>
  );
}

export default App;


import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterPage from "./containers/register/RegisterPage";
import ForgotPasswordPage from "./containers/forgotPassword/ForgotPasswordPage";
import { RootContext } from "./context/RootContext";
import Cover from "./components/cover/Cover";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./containers/home/HomePage"));
const TeamsPage = lazy(() => import("./containers/teams/TeamsPage"));
const EventsPage = lazy(() => import("./containers/events/EventsPage"));
const AboutPage =  lazy(() => import("./containers/about/AboutPage"));
const LoginPage = lazy(() => import("./containers/login/LoginPage"));
const NotFoundPage = lazy(() => import("./containers/notFound/NotFoundPage"));

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCoverOn, setIsCoverOn] = useState(true);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let myAudio = document.getElementById("welcome-audio");
    if (isPlaying) {
      myAudio.muted = false;
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if(isCoverOn) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }else {
      document.getElementsByTagName("html")[0].style.overflow = "visible";
    }
  }, [isCoverOn])

  return (
    <div>
      <RootContext.Provider value={{ isPlaying, setIsPlaying }}>
        {isCoverOn && (
          <Cover
            setIsPlaying={setIsPlaying}
            setIsCoverOn={setIsCoverOn}
            setPlay={setPlay}
          />
        )} 
        <Suspense fallback={<Loader />}>
          <BrowserRouter path="/">
            <Routes>
              <Route path="/" element={<HomePage play={play} />} />
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
      </RootContext.Provider>
    </div>
  );
}

export default App;

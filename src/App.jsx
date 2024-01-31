import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterPage from "./containers/register/RegisterPage";
import AboutPage from "./containers/about/AboutPage";
import LoginPage from "./containers/login/LoginPage";
import ForgotPasswordPage from "./containers/forgotPassword/ForgotPasswordPage";
import { RootContext } from "./context/RootContext";
import Cover from "./components/cover/Cover";
import { useEffect, useState } from "react";

import HomePage from "./containers/home/HomePage";
import TeamsPage from "./containers/teams/TeamsPage";
import EventsPage from "./containers/events/EventsPage";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCoverOn, setIsCoverOn] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(true);

  document.onreadystatechange = () => {
    setIsPageLoading(document.readyState !== "complete");
  };


  useEffect(() => {
    let myAudio = document.getElementById("welcome-audio");
    if (isPlaying) {
      myAudio.muted = false;
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <RootContext.Provider value={{ isPlaying, setIsPlaying }}>
        {isCoverOn && (
          <Cover
            setIsPlaying={setIsPlaying}
            setIsCoverOn={setIsCoverOn}
            isPageLoading={isPageLoading}
          />
        )}
        <BrowserRouter path="/">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Routes>
        </BrowserRouter>
      </RootContext.Provider>
    </>
  );
}

export default App;

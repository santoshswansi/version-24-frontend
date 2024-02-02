import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterPage from "./containers/register/RegisterPage";
import AboutPage from "./containers/about/AboutPage";
import LoginPage from "./containers/login/LoginPage";
import ForgotPasswordPage from "./containers/forgotPassword/ForgotPasswordPage";
import HomePage from "./containers/home/HomePage";
import EventsPage from "./containers/events/EventsPage";
import TeamsPage from "./containers/teams/TeamsPage";
import { RootContext } from "./context/RootContext";
import { useEffect, useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(
    localStorage.getItem("is-playing") === "true"
  );

  console.log(isPlaying);
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
    <div>
      <RootContext.Provider value={{ isPlaying, setIsPlaying }}>
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
    </div>
  );
}

export default App;

import EventRegisterForm from "./components/EventRegistrationForm";
import LandingPage from "./pages/LandingPage";
import EventPage from "./pages/EventPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/EventRegistrationForm" element={<EventRegisterForm />} />
        <Route path="/EventPage" element={<EventPage />} />
      </Routes>
      <div className="flex justify-center flex-col items-center w-[100vw]"></div>
    </>
  );
}

export default App;

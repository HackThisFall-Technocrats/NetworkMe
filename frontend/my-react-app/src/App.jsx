import EventRegisterForm from "./components/EventRegistrationForm";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/EventRegistrationForm" element={<EventRegisterForm />} />
      </Routes>
      <div className="flex justify-center flex-col items-center w-[100vw]">
        {/* <UserForm /> */}
        {/* <UserCard /> */}
        {/* <Testimonials /> */}
        {/* <SponsorTile/> */}
        <LandingPage />
      </div>
    </>
  );
}

export default App;

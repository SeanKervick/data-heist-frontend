import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import SiteHeader from "./components/SiteHeader";
import PasswordCracker from "./pages/challenges/PasswordCrackerPage.tsx";
import SpotThePhish from "./pages/challenges/SpotThePhishPage.tsx";
import QuizRound from "./pages/challenges/QuizRoundPage.tsx";
import FeedbackPage from "./pages/FeedbackPage.tsx";


const App = () => {
  return (
    <Router>
      <SiteHeader />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/challenge/password-cracker" element={<PasswordCracker />} />
        <Route path="/challenge/spot-the-phish" element={<SpotThePhish />} />
        <Route path="/challenge/quiz" element={<QuizRound />} />
        <Route path="/feedback" element={<FeedbackPage />} />

        {/* protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

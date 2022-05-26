import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import ArchivePage from "./Pages/ArchivePage/ArchivePage";
import HomePage from "./Pages/HomePage/HomePage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signin-page" element={<SignInPage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/archive-page" element={<ArchivePage />} />
      </Routes>
    </div>
  );
}

export default App;

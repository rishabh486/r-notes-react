import { Routes, Route } from "react-router-dom";
import { Toastr } from "./Components/toastr";
import Navbar from "./Components/Navbar/navbar";
import ArchivePage from "./Pages/ArchivePage/ArchivePage";
import HomePage from "./Pages/HomePage/HomePage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import TrashPage from "./Pages/TrashPage/TrashPage";
function App() {
  return (
    <div className="App">
      <Toastr />
      <Navbar />
      <Routes>
        <Route path="/signin-page" element={<SignInPage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/archive-page" element={<ArchivePage />} />
        <Route path="/trash-page" element={<TrashPage />} />
      </Routes>
    </div>
  );
}

export default App;

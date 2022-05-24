import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signin-page" element={<SignInPage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;

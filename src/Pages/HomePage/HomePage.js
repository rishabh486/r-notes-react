import React from "react";
import "./homePage.css";
import Navbar from "../../Components/Navbar/navbar";
import Sidebar from "../../Components/Navbar/Sidebar/sidebar";
import Notes from "../../Components/Notes/notes";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="notes-page">
        <Sidebar />
        {/* <Notes className="note-decoration" /> */}
      </div>
    </div>
  );
}

export default HomePage;

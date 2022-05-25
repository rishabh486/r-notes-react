import React from "react";
import "./homePage.css";
import Navbar from "../../Components/Navbar/navbar";
import Sidebar from "../../Components/Navbar/Sidebar/sidebar";
import Notes from "../../Components/Notes/notes";
import UserNotes from "../../Components/UserNotes/usernotes";

function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <div className="notes-page">
        <Sidebar />
        <UserNotes className="note-decoration" />
      </div>
    </div>
  );
}

export default HomePage;

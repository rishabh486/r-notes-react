import React, { useState } from "react";
import { AddNotes } from "../../Reducers/notes-reducer";
import "./notes.css";
import { useNotes } from "../../Context/notes-context";
function Notes({ setIsOpen }) {
  const { dispatch } = useNotes();
  const [selTag, setSelTag] = useState("");
  const [selPriority, setSelPriority] = useState("");
  const [selColor, setSelColor] = useState("");
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  return (
    <div>
      <div className="main-content">
        <div className="main-content-header">
          <label className="notes-title" for="notes">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => {
              const text = e.target.value;
              setTitle(text);
            }}
            id="notes"
            name="w3review"
          />
        </div>

        <div className="main-content-body">
          <label className="notes-body" for="body">
            Content
          </label>

          <textarea
            onChange={(e) => {
              const body = e.target.value;
              setBodyText(body);
            }}
            className="body-text"
            id="body"
            name="w3review"
          ></textarea>
        </div>
        <div className="tags-div">
          <div>
            <label for="cars">Choose a tag:</label>

            <select
              name="cars"
              id="cars"
              onChange={(e) => {
                const item = e.target.value;
                setSelTag(item);
              }}
            >
              <option value="gym">gym</option>
              <option value="activity">activity</option>
              <option value="office">office</option>
              <option value="home">home</option>
            </select>
          </div>
          <div>
            <label for="cars">Choose priority</label>

            <select
              onChange={(e) => {
                const item = e.target.value;
                setSelPriority(item);
              }}
              name="cars"
              id="cars"
            >
              <option value="high">high</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
            </select>
          </div>
          <div>
            <label for="cars">Choose a color</label>
            <select
              onChange={(e) => {
                const item = e.target.value;
                setSelColor(item);
              }}
              name="cars"
              id="cars"
            >
              <option value="yellow">yellow</option>
              <option value="brown">brown</option>
              <option value="aqua">aqua</option>
            </select>
          </div>
        </div>
        <div className="btn-div">
          <button
            className="button-container primary-button1"
            onClick={() => {
              setIsOpen(false);
              AddNotes(
                {
                  title: title,
                  bodyText: bodyText,
                  tags: {
                    tag: selTag,
                    priority: selPriority,
                    color: selColor,
                  },
                },
                dispatch
              );
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;

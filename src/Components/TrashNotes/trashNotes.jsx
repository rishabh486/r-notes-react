import React from "react";
import "./trashnotes.css";
import { delete_icon, trash_icon, restore_icon } from "../../Assests";
import { useNotes } from "../../Context/notes-context";
import {
  RemoveFromTrash,
  AddFromTrashToNotes,
} from "../../Reducers/trash-reducer";

function TrashNotes() {
  const {
    state: { trash },
    dispatch,
  } = useNotes();
  return (
    <div>
      <div className="decoration-archive">
        <h1>Trash Page</h1>
        {trash &&
          trash.map((trashNotes) => (
            <div className="archive-notes">
              <div className={`user-notes-detail ${trashNotes.tags.color}`}>
                <div className="upper-div">
                  <div>
                    <h1>Title:</h1>
                    <h1>{trashNotes.title}</h1>
                    <h1>Body:</h1>
                    <h1>{trashNotes.bodyText}</h1>
                  </div>

                  <div>
                    <img
                      className="archive-icon"
                      onClick={() =>
                        AddFromTrashToNotes(
                          trashNotes._id,
                          trashNotes,
                          dispatch
                        )
                      }
                      src={restore_icon}
                    />
                    <img
                      onClick={() => RemoveFromTrash(trashNotes._id, dispatch)}
                      className="delete-icon"
                      src={delete_icon}
                    />
                  </div>
                </div>

                <div className="tags">
                  <h1>{trashNotes.tags.priority}</h1>
                  <h1>{trashNotes.tags.tag}</h1>
                  <h1>{trashNotes.tags.color}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default TrashNotes;

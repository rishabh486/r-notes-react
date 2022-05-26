import React from "react";
import "./archiveNotes.css";
import { delete_icon, trash_icon, restore_icon } from "../../Assests";
import { useNotes } from "../../Context/notes-context";
import {
  AddFromArchivesToNotes,
  RemoveFromArchives,
} from "../../Reducers/archive-reducer";
function ArchiveNotes() {
  const {
    state: { archives },
    dispatch,
  } = useNotes();
  return (
    <div>
      <div className="decoration-archive">
        <h1>Archive Page</h1>
        {archives &&
          archives.map((archive) => (
            <div className="archive-notes">
              <div className={`user-notes-detail ${archive.tags.color}`}>
                <div className="upper-div">
                  <div>
                    <h1>Title:</h1>
                    <h1>{archive.title}</h1>
                    <h1>Body:</h1>
                    <h1>{archive.bodyText}</h1>
                  </div>

                  <div>
                    <img
                      className="archive-icon"
                      onClick={() =>
                        AddFromArchivesToNotes(archive._id, archive, dispatch)
                      }
                      src={restore_icon}
                    />
                    <img
                      onClick={() => RemoveFromArchives(archive._id, dispatch)}
                      className="delete-icon"
                      src={delete_icon}
                    />
                    {/* <img
                      onClick={() => AddNotesToTrash(note._id, note, dispatch)}
                      className="trash-icon"
                      src={trash_icon}
                    /> */}
                  </div>
                </div>

                <div className="tags">
                  <h1>{archive.tags.priority}</h1>
                  <h1>{archive.tags.tag}</h1>
                  <h1>{archive.tags.color}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ArchiveNotes;

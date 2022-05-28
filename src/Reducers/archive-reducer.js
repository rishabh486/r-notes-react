import axios from "axios";
import { toast } from "react-toastify";
export const AddFromArchivesToNotes = async (id, archive, dispatch) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${id}`,
      { archive: { ...archive } },
      {
        headers: {
          authorization: localStorage.getItem("notesapp-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_FROM_ARCHIVE_TO_NOTES",
      payload: { notes: response.data.notes },
    });
  } catch (err) {
    console.log(err);
  }
};
export const RemoveFromArchives = async (id, dispatch) => {
  try {
    const response = await axios.delete(`/api/archives/delete/${id}`, {
      headers: {
        authorization: localStorage.getItem("notesapp-token"),
      },
    });
    dispatch({
      type: "REMOVE_FROM_ARCHIVES",
      payload: { archives: response.data.archives },
    });
  } catch (error) {
    console.log(error);
  }
};

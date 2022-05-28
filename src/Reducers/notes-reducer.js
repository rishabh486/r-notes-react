import axios from "axios";
import { toast } from "react-toastify";
export const AddNotes = async (params, dispatch) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note: { ...params } },
      {
        headers: {
          authorization: localStorage.getItem("notesapp-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_NEW_NOTE",
      payload: { notes: response.data.notes },
    });
  } catch (err) {
    console.log(err);
  }
};
export const UserNotes = async (dispatch) => {
  try {
    const response = await axios.get(
      "/api/notes",

      {
        headers: {
          authorization: localStorage.getItem("notesapp-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "GET_USER_NOTES",
      payload: { notes: response.data.notes },
    });
  } catch (err) {
    console.log(err);
  }
};
export const RemoveFromNotes = async (id, dispatch) => {
  try {
    const response = await axios.delete(`/api/notes/${id}`, {
      headers: {
        authorization: localStorage.getItem("notesapp-token"),
      },
    });
    dispatch({
      type: "REMOVE_FROM_NOTES",
      payload: { notes: response.data.notes },
    });
  } catch (error) {
    console.log(error);
  }
};
export const AddNotesToArchive = async (id, note, dispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${id}`,
      { note: { ...note } },
      {
        headers: {
          authorization: localStorage.getItem("notesapp-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_NOTES_TO_ARCHIVE",
      payload: { archives: response.data.archives, notes: response.data.notes },
    });
  } catch (err) {
    console.log(err);
  }
};
export const AddNotesToTrash = async (id, note, dispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/trash/${id}`,
      { note: { ...note } },
      {
        headers: {
          authorization: localStorage.getItem("notesapp-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_NOTES_TO_TRASH",
      payload: { trash: response.data.trash },
    });
  } catch (err) {
    console.log(err);
  }
};

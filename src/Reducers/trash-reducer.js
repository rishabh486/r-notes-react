import axios from "axios";
export const AddFromTrashToNotes = async (id, trash, dispatch) => {
  try {
    const response = await axios.post(
      `/api/trash/restore/${id}`,
      { trash: { ...trash } },
      {
        headers: {
          authorization: localStorage.getItem("notesapp-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_FROM_TRASH_TO_NOTES",
      payload: { notes: response.data.notes },
    });
  } catch (err) {
    console.log(err);
  }
};
export const RemoveFromTrash = async (id, dispatch) => {
  try {
    const response = await axios.delete(`/api/trash/delete/${id}`, {
      headers: {
        authorization: localStorage.getItem("notesapp-token"),
      },
    });
    dispatch({
      type: "REMOVE_FROM_TRASH",
      payload: { trash: response.data.trash },
    });
  } catch (error) {
    console.log(error);
  }
};

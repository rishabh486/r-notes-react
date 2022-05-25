import axios from "axios";
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

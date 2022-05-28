export function authReducer(state, action) {
  switch (action.type) {
    case "TOKEN_EXISTS":
      return { ...state, tokenExists: true };
    case "TOKEN_REMOVED":
      return { ...state, tokenExists: false };
    case "ADD_NEW_NOTE":
      return { ...state, notes: action.payload.notes };
    case "GET_USER_NOTES":
      return { ...state, notes: action.payload.notes };
    case "REMOVE_FROM_NOTES":
      return { ...state, notes: action.payload.notes };
    case "ADD_NOTES_TO_ARCHIVE":
      return {
        ...state,
        archives: action.payload.archives,
        notes: action.payload.notes,
      };
    case "ADD_NOTES_TO_TRASH":
      return { ...state, trash: action.payload.trash };
    case "REMOVE_FROM_ARCHIVES":
      return { ...state, archives: action.payload.archives };
    case "REMOVE_FROM_TRASH":
      return { ...state, trash: action.payload.trash };
    case "ADD_FROM_ARCHIVE_TO_NOTES":
      return { ...state, archives: action.payload.archives };
    default:
      return state;
  }
}

export function authReducer(state, action) {
  switch (action.type) {
    case "TOKEN_EXISTS":
      return { ...state, tokenExists: true };
    case "TOKEN_REMOVED":
      return { ...state, tokenExists: false };
    case "ADD_NEW_NOTE":
      return { ...state, notes: action.payload.notes };
    default:
      return state;
  }
}

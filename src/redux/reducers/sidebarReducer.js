import { HANDLE_CLOSE, TOGGLE_SIDEBAR } from "../actions/sidebarActions";
const initialState = {
  isOpen: false,
};
const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
export default sidebarReducer;

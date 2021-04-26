const initialState = {
  songs: [{ name: "eaiting" }],
  isLoading: true,
};

function library(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MUSICS":
      return state;
    case "UPDATE_MUSICS":
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
export default library;

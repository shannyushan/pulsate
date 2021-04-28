const initialState = {
  isPlaying: false,
  currentPlaying: null,
  nextSong: null,
  playlistName: "default",
  playlist: [],
  playIndex: 0,
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PLAYER":
      // const { } = action.payload;
      return {
        ...state,
        isPlaying: true,
        playerState: "playing",
        currentPlaying: action.payload.currentPlaying,
        playlistName: action.payload.playlistName,
        playIndex: action.payload.playIndex,
      };
    case "CLEAR_PLAYER":
      return {
        ...state,
        playerState: null,
        isPlaying: false,
        currentPlaying: null,
        nextSong: null,
        playlistName: null,
        playlist: [],
        playIndex: 0,
      };
    case "START_PLAY":
      return {
        ...state,
        isPlaying: true,
        playerState: "playing",
        currentPlaying: action.payload.isPlaying,
        nextSong: playIndex + 1,
        playlistName: action.payload.playlistName,
        playlist: action.paylaod.playlist,
        playIndex: action.payload.playindex,
      };
    case "PAUSE_PLAY":
      return {
        isPlaying: false,
        playerState: "paused",
        currentPlaying: action.payload.isPlaying,
        nextSong: playIndex + 1,
        playlistName: action.payload.playlistName,
        playlist: action.paylaod.playlist,
        playIndex: action.payload.playindex,
      };
    default:
      return state;
  }
}
export default playerReducer;

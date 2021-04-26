import React, { useState, useEffect } from "react";
import { Container, Box } from "@chakra-ui/react";
import MainFrame from "./components/MainFrame";
import Player from "./components/Player";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const playerState = useSelector((state) => state.Player);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(async () => {
    const musics = await window.pulse.invoke("getMusic", "hd");
    const data = musics["rows"];
    dispatch({
      type: "UPDATE_MUSICS",
      payload: data,
    });
    setIsLoading(false);
  }, [isLoading]);
  return (
    <>
      {!isLoading ? (
        <Container
          m="0"
          minW="100%"
          p="0"
          // backgroundColor="#162447" old
          // backgroundColor="#32313e"
          width="100%"
          height="100%"
          borderRadius="8px"
        >
          {/* <TopBar /> */}
          <MainFrame />
          {playerState.isPlaying && <Player />}
        </Container>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;

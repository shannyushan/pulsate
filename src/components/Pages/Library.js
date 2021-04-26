import { Container, VStack, Flex, Text, Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Library() {
  const musiclibrary = useSelector((state) => state.Library);
  const isloading = useSelector((state) => state.Library.isLoading);
  const [isLoading, setIsLoading] = useState(isloading);
  const [musicLibrary, setMusicLibrary] = useState(musiclibrary.songs);

  useEffect(async () => {
    // const musics = await window.pulse.invoke("getMusic", "helel");
    // setMusicLibrary(musics["rows"]);
    // console.log(musics["rows"]);
    // setIsLoading(false);
  }, []);

  return (
    <>
      <Container w="100%" height="auto" minH="500px" maxW="100%">
        <VStack w="100%" height="100%" minH="inherit">
          {!isLoading &&
            musicLibrary.map((row, index) => (
              <MusicBlock
                key={index}
                name={row.name}
                id={row.id}
                src={row.src}
              />
            ))}
        </VStack>
      </Container>
    </>
  );
}
function MusicBlock({ name, id, src }) {
  const PlayerState = useSelector((state) => state.Player);
  const dispatch = useDispatch();

  function dispatchMusic(src) {
    console.log(src);
    const data = {
      isPlaying: true,
      playerState: "playing",
      currentPlaying: src,
      playlistName: "john",
    };
    dispatch({
      type: "UPDATE_PLAYER",
      payload: data,
    });
  }
  return (
    <Flex
      height="80px"
      width="100%"
      p="10px"
      border="1px solid yellow"
      cursor="pointer"
      onClick={() => dispatchMusic(src)}
    >
      <img
        src=""
        style={{
          width: "60px",
          marginRight: "10px",
          height: "60px",
          border: "1px solid white",
        }}
        alt="Artist Image"
      />
      <Box height="100%" width="calc(100% - 70px)">
        <Text size="md">{name}</Text>
        <Text size="sm">{id}</Text>
      </Box>
    </Flex>
  );
}

export default Library;

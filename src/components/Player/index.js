import React, { useState, useEffect } from "react";
import { Box, Flex, VStack, HStack } from "@chakra-ui/react";
import { useSelector, connect } from "react-redux";

function Player(props) {
  // const PlayerState = useSelector((state => state.Player));
  // const [isPlaying, setIsPlaying] = useState(PlayerState.isPlaying);
  useEffect(() => {
    playSong(props.src);
  }, [props]);

  function playSong(song) {
    var audio = document.getElementById("player");
    audio.setAttribute("src", `safe-protocol://${song}`);
    console.log(song);
    audio.play();
  }
  function pausePlay() {
    var player = document.getElementById("player");
    player.paused ? player.play() : player.pause();
  }
  return (
    <HStack
      position="fixed"
      bottom="0"
      right="0"
      left="250px"
      w="calc(100% - 250px)"
      bg="blackAlpha.800"
      height="70px"
    >
      <Flex width="30%" maxW="100px"></Flex>
      <VStack width="70%">
        <Flex
          id="seeker"
          width="100%"
          height="10px"
          border="1px solid green"
          borderRadius="full"
          alignItems="center"
        >
          <Box
            width="30%"
            height="100%"
            bg="green.300"
            style={{
              borderTopRightRadius: "full",
              borderBottomRightRadius: "full",
            }}
          ></Box>
          <Box
            w="15px"
            h="15px"
            borderRadius="50%"
            marginLeft="-15px"
            bg="green.500"
          ></Box>
        </Flex>
        <HStack
          alignItems="center"
          w="100px"
          height="calc(100% - 20px)"
          justifyContent="space-evenly"
          id="controls"
          width="100%"
          maxWidth="120px"
          margin="0 auto"
          height="40px"
        >
          <audio hidden id="player" preload="metadata" controls></audio>
          <Box id="playPrev" p="10px">
            prev
          </Box>
          <Box p="10px" cursor="pointer" id="play" onClick={() => pausePlay()}>
            play
          </Box>
          <Box id="nextPlay" p="10px">
            Next
          </Box>
        </HStack>
      </VStack>
    </HStack>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    src: state.Player.currentPlaying,
  };
}
export default connect(mapStateToProps)(Player);

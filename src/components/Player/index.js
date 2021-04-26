import React, { useState, useEffect } from "react";
import { Box, Flex, VStack, HStack } from "@chakra-ui/react";
import { useSelector, connect } from "react-redux";

function Player(props) {
  useEffect(() => {
    console.log(props.src);
    const audio = document.getElementById("audio");
    audio.load();
    audio.addEventListener("loadedmetadata", () => {
      console.log(audio.duration);
    });
  }, [props]);

  return (
    <Box position="fixed" bottom="0" w="100%" h="70px" bg="green">
      <audio id="audio" controls autoPlay preload="metadata">
        <source src={`safe-protocol://${props.src}`} type={"audio/mpeg"} />
        <source src={`safe-protocol://${props.src}`} type={"audio/m4a"} />
        <source src={`safe-protocol://${props.src}`} type={"audio/ogg"} />
        <source src={`safe-protocol://${props.src}`} type={"audio/oga"} />
        <source src={`safe-protocol://${props.src}`} type={"audio/webma"} />
        <source src={`safe-protocol://${props.src}`} type={"audio/wav"} />
        <source src={`safe-protocol://${props.src}`} type={"audio/mp3"} />
        Your browser does not support the audiio element.
      </audio>
    </Box>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    src: state.Player.currentPlaying,
  };
}
export default connect(mapStateToProps)(Player);

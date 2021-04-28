import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, VStack, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch, connect } from "react-redux";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

function Player(props) {
  const [percent, setPercent] = useState(0);
  const [duration, setDuration] = useState(null);
  const audioRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    var audio = document.getElementById("player");

    playSong(props.src);
  }, [props]);

  function playSong(song) {
    var audio = document.getElementById("player");
    audio.setAttribute("src", `safe-protocol://${song}`);
    audio.play();
  }
  function pausePlay() {
    var player = document.getElementById("player");
    player.paused ? player.play() : player.pause();
  }
  async function getSRCfromDB(id) {
    const resp = await window.pulse.invoke("getSRC", id);
    console.log("from player", resp);
    if (resp.success) {
      return resp.response[0].src;
    } else {
      console.log("err", resp.response);
      return null;
    }
  }
  async function prevPlay(id) {
    const src = await getSRCfromDB(id - 1);
    const data = {
      isPlaying: true,
      playerState: "playing",
      currentPlaying: src,
      playlistName: "",
      playIndex: id - 1,
    };
    dispatcher(data);
  }
  async function nextPlay(id) {
    const src = await getSRCfromDB(id + 1);
    const data = {
      isPlaying: true,
      playerState: "playing",
      currentPlaying: src,
      playlistName: "",
      playIndex: id + 1,
    };
    dispatcher(data);
  }

  function dispatcher(data) {
    dispatch({
      type: "UPDATE_PLAYER",
      payload: data,
    });
  }

  function seeker(e) {
    const { duration, currentTime } = e.target;
    setDuration(duration);
    const percent = (currentTime / duration) * 100;
    setPercent(percent);
  }
  function changeDuration(e) {
    const Dur_point = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
    const widthpoint = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
    setPercent(widthpoint);
    console.log(Dur_point);
    document.getElementById("player").currentTime = Dur_point;
    // audio.setPercent();
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
          height="8px"
          border="1px solid green"
          borderRadius="full"
          alignItems="center"
          cursor="pointer"
          onClick={(e) => changeDuration(e)}
        >
          <Box
            width={`${percent}%`}
            height="100%"
            bg="green.300"
            style={{
              borderTopRightRadius: "full",
              borderBottomRightRadius: "full",
            }}
          ></Box>
          <Box
            w="10px"
            h="10px"
            borderRadius="50%"
            marginLeft="-10px"
            bg="green.500"
          ></Box>
        </Flex>
        <HStack
          alignItems="center"
          w="100px"
          height="calc(100% - 15px)"
          justifyContent="space-evenly"
          id="controls"
          width="100%"
          maxWidth="120px"
          margin="0 auto"
          height="40px"
        >
          <audio
            hidden
            id="player"
            preload="metadata"
            controls
            onPlay={() => setPercent(0.1)}
            onTimeUpdate={(e) => seeker(e)}
          ></audio>
          <Box
            id="playPrev"
            cursor="pointer"
            p="10px"
            height="40px"
            onClick={() => prevPlay(props.id)}
          >
            <MdSkipPrevious />
          </Box>
          <Box
            height="40px"
            p="10px"
            cursor="pointer"
            id="play"
            onClick={() => pausePlay()}
          >
            <AiOutlinePauseCircle />
          </Box>
          <Box
            id="nextPlay"
            cursor="pointer"
            p="10px"
            height="40px"
            onClick={() => nextPlay(props.id)}
          >
            <MdSkipNext />
          </Box>
        </HStack>
      </VStack>
    </HStack>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    src: state.Player.currentPlaying,
    id: state.Player.playIndex,
  };
}
export default connect(mapStateToProps)(Player);

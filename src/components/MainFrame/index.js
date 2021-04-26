import React, { useState, useEffect } from "react";
import {
  Flex,
  HStack,
  VStack,
  Row,
  Box,
  Button,
  Text,
  Heading,
  Container,
  Link,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import {
  IoLibraryOutline,
  IoHomeOutline,
  IoAlbumsOutline,
  IoPersonOutline,
  IoHeartOutline,
} from "react-icons/io5";
import Search from "./../Search";
import Albums from "./../Pages/Albums";
import Artists from "./../Pages/Artists";
import Discover from "./../Pages/Discover";
import Favourites from "./../Pages/Favourites";
import Library from "./../Pages/Library";
import TopBar from "../TopBar";

function MainFrame() {
  const [pageState, setPageState] = useState("discover");
  const [playList, setPlayList] = useState({
    currentPlaying: "",
    isPlaying: false,
    songs: null,
  });

  function renderPage(page) {
    switch (page) {
      case "discover":
        return <Discover />;
      case "artists":
        return <Artists />;
      case "albums":
        return <Albums />;
      case "library":
        return <Library />;
      case "favourites":
        return <Favourites />;
      default:
        return <Discover />;
    }
  }

  function getPlayList() {
    const songList = [
      { name: "Let Me Love You" },
      { name: "Passenger" },
      { name: "Ophelia" },
      { name: "The Boy Who Cried Wolf" },
    ];
    setPlayList({ songs: songList });
  }

  useEffect(() => {
    getPlayList();
  }, []);
  return (
    <HStack overflowX="hidden" width="100%" height="100%">
      <VStack
        id="sidebar"
        width="30%"
        maxWidth="250px"
        minW="250px"
        // backgroundColor="#32313e"
        backgroundColor="rgba( 243, 243, 243, 0.12 )"
        style={{ backdropFilter: blur("120px") }}
        h="100%"
      >
        <Flex w="100%" alignItems="center" justifyContent="center" p="25px 0">
          <Heading>Pulsate</Heading>
        </Flex>
        <Box w="100%" p="5px 20px" marginTop="10px">
          <Text fontWeight="100" textTransform="uppercase" color="#c1c1c1eb">
            Home
          </Text>
          <VStack w="100%" paddingLeft="10px" alignItems="start">
            <List w="100%" h="100%">
              <ListItem
                h="40px"
                paddingLeft="10px"
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={() => setPageState("discover")}
                _hover={{
                  background: "#47455da6",
                }}
              >
                <IoHomeOutline style={{ width: "20px", height: "100%" }} />
                <Link
                  textTransform="uppercase"
                  paddingLeft="10px"
                  style={{
                    letterSpacing: "1px",
                    fontWeight: "100",
                    fontSize: "0.8em",
                  }}
                >
                  Discover
                </Link>
              </ListItem>
              <ListItem
                h="40px"
                paddingLeft="10px"
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={() => setPageState("library")}
                _hover={{
                  background: "#47455da6",
                }}
              >
                <IoLibraryOutline style={{ width: "20px", height: "100%" }} />
                <Link
                  textTransform="uppercase"
                  paddingLeft="10px"
                  style={{
                    letterSpacing: "1px",
                    fontWeight: "100",
                    fontSize: "0.8em",
                  }}
                >
                  Library
                </Link>
              </ListItem>
              <ListItem
                h="40px"
                paddingLeft="10px"
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={() => setPageState("artists")}
                _hover={{
                  background: "#47455da6",
                }}
              >
                <IoPersonOutline style={{ width: "20px", height: "100%" }} />
                <Link
                  textTransform="uppercase"
                  paddingLeft="10px"
                  style={{
                    letterSpacing: "1px",
                    fontWeight: "100",
                    fontSize: "0.8em",
                  }}
                >
                  Artists
                </Link>
              </ListItem>
              <ListItem
                h="40px"
                paddingLeft="10px"
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={() => setPageState("albums")}
                _hover={{
                  background: "#47455da6",
                }}
              >
                <IoAlbumsOutline style={{ width: "20px", height: "100%" }} />
                <Link
                  textTransform="uppercase"
                  paddingLeft="10px"
                  style={{
                    letterSpacing: "1px",
                    fontWeight: "100",
                    fontSize: "0.8em",
                  }}
                >
                  Albums
                </Link>
              </ListItem>
              <ListItem
                h="40px"
                paddingLeft="10px"
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={() => setPageState("albums")}
                _hover={{
                  background: "#47455da6",
                }}
              >
                <IoAlbumsOutline style={{ width: "20px", height: "100%" }} />
                <Link
                  textTransform="uppercase"
                  paddingLeft="10px"
                  style={{
                    letterSpacing: "1px",
                    fontWeight: "100",
                    fontSize: "0.8em",
                  }}
                >
                  Folders
                </Link>
              </ListItem>
              <ListItem
                h="40px"
                paddingLeft="10px"
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={() => setPageState("favourites")}
                _hover={{
                  background: "#47455da6",
                }}
              >
                <IoHeartOutline style={{ width: "20px", height: "100%" }} />
                <Link
                  textTransform="uppercase"
                  paddingLeft="10px"
                  style={{
                    letterSpacing: "1px",
                    fontWeight: "100",
                    fontSize: "0.8em",
                  }}
                >
                  Favourites
                </Link>
              </ListItem>
            </List>
          </VStack>
        </Box>
        <Box w="100%" p="5px 20px">
          <Text
            fontWeight="100"
            textTransform="uppercase"
            color="#c1c1c1eb"
            paddingBottom="10px"
          >
            Playlist
          </Text>
          <VStack w="100%" paddingLeft="5px" alignItems="start">
            <List w="100%">
              {playList.songs != null &&
                playList.songs.map((list, index) => (
                  <ListItem
                    p="3px 0"
                    paddingLeft="20px"
                    w="100%"
                    key={index}
                    _hover={{ background: "#7b82887d" }}
                  >
                    <Link
                      style={{
                        // letterSpacing: "1px",
                        fontWeight: "100",
                        fontSize: "0.8em",
                      }}
                    >
                      {list.name}
                    </Link>
                  </ListItem>
                ))}
            </List>
          </VStack>
        </Box>
        <Spacer />
        <HStack>
          <Text>Current Version</Text>
          <Text>0.1.1</Text>
        </HStack>
      </VStack>
      {/* page */}
      <Box
        id="page"
        width="calc(100% - 250px)"
        m="0"
        minW="calc(100% - 250px)"
        height="100%"
        overflowX="hidden"
        overflowY="auto"

        // backgroundColor="#1d1d29"
      >
        <TopBar />
        <VStack height="calc(100% - 30px)">
          <Search />
          {renderPage(pageState)}
        </VStack>
      </Box>
    </HStack>
  );
}

export default MainFrame;

import React from "react";
import {
  Text,
  Heading,
  Box,
  HStack,
  VStack,
  Flex,
  Row,
  SimpleGrid,
} from "@chakra-ui/react";
import AlbumCard from "../Mini/AlbumCard";
import ArtistCircle from "../Mini/ArtistCircle";

function Discover() {
  return (
    <>
      <VStack
        w="100%"
        h="230px"
        alignItems="flex-start"
        justifyContent="center"
        p="5px 15px"
      >
        <Heading size="md" marginTop="8px">
          Albums
        </Heading>
        <SimpleGrid gridAutoFlow="column" column={5} spacing="1em" w="100%">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </SimpleGrid>
      </VStack>
      <VStack w="100%" h="130px" alignItems="flex-start" p="5px 15px">
        <Heading size="md" marginTop="8px">
          Artists
        </Heading>
        <SimpleGrid gridAutoFlow="column" column={5} spacing="10px" w="100%">
          <ArtistCircle />
          <ArtistCircle />
          <ArtistCircle />
          <ArtistCircle />
          <ArtistCircle />
          <ArtistCircle />
          <ArtistCircle />
          <ArtistCircle />
          <ArtistCircle />
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default Discover;

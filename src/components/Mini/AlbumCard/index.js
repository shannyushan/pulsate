import React from "react";
import { Text, Box, Flex, Tag, TagLabel } from "@chakra-ui/react";

function AlbumCard(props) {
  return (
    <Box
      position="relative"
      maxWidth="200px"
      width="180px"
      height="180px"
      backgroundColor="#2e2d3e"
      borderRadius="5px"
      boxShadow="0px 0px 12px 0px rgb(199 199 199 / 62%)"
      backgroundImage="url('/media/Album1.jfif')"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        zIndex="10"
        backgroundImage="linear-gradient(to bottom, #ffffff00, #aeb2b300, #4c4d65ad, #292340f0, #2b273ceb)"
      ></Box>
      <Flex
        justifyContent="space-evenly"
        position="absolute"
        bottom="5px"
        width="100%"
        h="85px"
        zIndex="12"
        paddingLeft="3px"
      >
        <img
          style={{ borderRadius: "50%", height: "70px", width: "70px" }}
          src="/media/passenger.jfif"
          alt="artist"
          name="Artist"
        />
        <Box padding="0 2px 0 4px">
          <Text fontSize="13px" fontWeight="500" className="cd-album-name">
            A Song For Drunk and Broken Hearted
          </Text>
          <Tag variant="outline" fontSize="12px" fontWeight="200">
            <TagLabel>Passenger</TagLabel>
          </Tag>
        </Box>
      </Flex>
    </Box>
  );
}

export default AlbumCard;

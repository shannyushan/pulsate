import { Box, VStack, Tag, TagLabel } from "@chakra-ui/react";
import React from "react";

function ArtistCircle(props) {
  return (
    <VStack w="100px" height="100px">
      <img
        style={{
          borderRadius: "50%",
        }}
        alt="artist"
        width="70px"
        height="70px"
        src="/media/passenger.jfif"
      />
      <Tag variant="outline" borderRadius="full">
        Sample Tag
      </Tag>
    </VStack>
  );
}

export default ArtistCircle;

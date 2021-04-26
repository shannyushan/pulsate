import React from "react";
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
  Menu,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";

function TopBar() {
  const MinApp = (e) => {
    window.pulse.send("minimize", "minimize");
  };

  const MaxApp = (e) => {
    e.preventDefault();
    window.pulse.send("minmax", "dsd");
  };

  const CloseApp = (e) => {
    // e.preventDefault();
    window.pulse.send("close", "ss");
  };
  return (
    <HStack
      position="sticky"
      top="0"
      zIndex="100"
      id="menuBar"
      h="30px"
      w="100%"
      p="0"
    >
      <Spacer style={{ WebkitAppRegion: "drag", cursor: "pointer" }} />
      <Flex
        h="100%"
        maxH="20px"
        width="80px"
        justifyContent="space-evenly"
        margin="0 auto"
        marginRight="10px"
      >
        <Flex
          borderRadius="50%"
          p="2px"
          border="1px solid rgba(200,200,200,0.6)"
          alignItems="center"
          h="18px"
          w="18px"
          cursor="pointer"
          onClick={MinApp}
          backgroundColor="orange"
        >
          {/* <VscChromeMinimize /> */}
        </Flex>
        <Flex
          borderRadius="50%"
          p="2px"
          border="1px solid rgba(200,200,200,0.6)"
          alignItems="center"
          h="18px"
          w="18px"
          cursor="pointer"
          onClick={MaxApp}
          backgroundColor="green"
        >
          {/* <VscChromeMaximize /> */}
        </Flex>
        <Flex
          borderRadius="50%"
          p="2px"
          border="1px solid rgba(200,200,200,0.6)"
          alignItems="center"
          h="18px"
          w="18px"
          cursor="pointer"
          onClick={CloseApp}
          backgroundColor="red"
        >
          {/* <VscChromeClose /> */}
        </Flex>
      </Flex>
    </HStack>
  );
}

export default TopBar;

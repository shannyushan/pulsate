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
    <HStack id="menuBar" h="25px" w="100%" p="0 4px">
      <Spacer cursor="pointer" style={{ WebkitAppRegion: "drag" }} />
      <Flex
        h="100%"
        maxH="20px"
        maxWidth="80px"
        width="80px"
        justifyContent="space-evenly"
        margin="0 auto"
      >
        <Flex
          borderRadius="50%"
          p="2px"
          border="1px solid rgba(200,200,200,0.6)"
          alignItems="center"
          h="100%"
          cursor="pointer"
          onClick={MinApp}
          backgroundColor="orange"
        >
          <VscChromeMinimize />
        </Flex>
        <Flex
          borderRadius="50%"
          p="2px"
          border="1px solid rgba(200,200,200,0.6)"
          alignItems="center"
          h="100%"
          cursor="pointer"
          onClick={MaxApp}
          backgroundColor="green"
        >
          <VscChromeMaximize />
        </Flex>
        <Flex
          borderRadius="50%"
          p="2px"
          border="1px solid rgba(200,200,200,0.6)"
          alignItems="center"
          h="100%"
          cursor="pointer"
          onClick={CloseApp}
          backgroundColor="red"
        >
          <VscChromeClose />
        </Flex>
      </Flex>
    </HStack>
  );
}

export default TopBar;

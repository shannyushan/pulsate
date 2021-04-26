import React, { useState, useEffect } from "react";
import { Flex, InputGroup, Input } from "@chakra-ui/react";
function Search() {
  const [query, setQuery] = useState(null);
  return (
    <Flex
      paddingTop="20px"
      justifyContent="flex-start"
      width="100%"
      height="auto"
    >
      <InputGroup justifySelf="center" width="70%" maxW="500px">
        <Input
          // outline="none"
          focusBorderColor="lime"
          variant="outline"
          width="100%"
          fontSize="20px"
          fontWeight="600"
          padding="5px 3px"
          paddingLeft="15px"
          // backgroundColor="#2b273cc7"
          // color="white"
          // border="0"
          borderRadius="20px"
          size="xl"
          // _focus={{outline:""}}
        />
      </InputGroup>
    </Flex>
  );
}

export default Search;

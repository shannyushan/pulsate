import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("#1c243ad1")(props),
      borderRadius: "30px",
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props) => ({
      dialog: {
        bg: mode("white", "#141214")(props),
      },
    }),
  },
};

// 3. extend the theme
const theme = extendTheme({
  components,
  styles,
  // config,
});

export default theme;

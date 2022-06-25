import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Montserrat",
  },
  styles: {
    global: {
      "html, body": {
        background: "#000",
        overflowX: "hidden",
        overflowY: "hidden",
      },
    },
  },
});

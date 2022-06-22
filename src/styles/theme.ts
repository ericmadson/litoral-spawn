import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Montserrat",
  },
  styles: {
    global: {
      "html, body": {
        background: "#fff",
        overflowX: "hidden",
        overflowY: "hidden",
      },
    },
  },
});

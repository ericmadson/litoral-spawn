import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NuiProvider } from "fivem-nui-react-lib";
import Config from "./config";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <NuiProvider resource={Config.resourceName}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </NuiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

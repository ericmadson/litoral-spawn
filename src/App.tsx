import "./styles/global.scss";
import { useNuiEvent } from "fivem-nui-react-lib";
import { Flex } from "@chakra-ui/react";
import { background } from "./assets";

const App = () => {
  return (
    <div className="App">
      <Flex width="100vw" height="100vh" backgroundImage={background}></Flex>
    </div>
  );
};

export default App;

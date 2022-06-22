import "./styles/global.scss";
import { Flex } from "@chakra-ui/react";
import { background } from "./assets";
import { Header } from "./components/Header/Header";
import { SpawnPick } from "./components/SpawnPick/SpawnPick";

const App = () => {
  return (
    <div className="App">
      <Flex
        width="100vw"
        height="100vh"
        backgroundImage={background}
        flexDir="column"
      >
        <Header />
        <SpawnPick />
      </Flex>
    </div>
  );
};

export default App;

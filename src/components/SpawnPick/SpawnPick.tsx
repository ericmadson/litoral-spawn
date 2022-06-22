import { HStack, Flex } from "@chakra-ui/react";
import {
  orgBackground,
  orgIcon,
  homeBackground,
  homeIcon,
  losSantosBackground,
  losSantosIcon,
  lastLocBackground,
  lastLocIcon,
  sandyShoresBackground,
  sandyShoresIcon,
} from "../../assets";
import { SpawnPickItem } from "./SpawnPickItem";

export function SpawnPick() {
  return (
    <Flex mt="3.5rem" justify="center">
      <HStack spacing={0}>
        <SpawnPickItem
          title="ORGANIZAÇÃO"
          image={orgBackground}
          icon={orgIcon}
          width="368px"
          height="640px"
        />
        <HStack spacing={-10}>
          <SpawnPickItem
            title="CASA"
            image={homeBackground}
            icon={homeIcon}
            width="385px"
            height="648px"
          />
          <SpawnPickItem
            title="LOS SANTOS"
            image={losSantosBackground}
            icon={losSantosIcon}
            width="400px"
            height="644px"
          />
        </HStack>
        <SpawnPickItem
          title="ÚLTIMA LOCALIZAÇÃO"
          image={lastLocBackground}
          icon={lastLocIcon}
          width="351px"
          height="654px"
        />
        <SpawnPickItem
          title="SANDY SHORES"
          image={sandyShoresBackground}
          icon={sandyShoresIcon}
          width="338px"
          height="669px"
        />
      </HStack>
    </Flex>
  );
}

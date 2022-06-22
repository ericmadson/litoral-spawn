import { Flex, Text, Image, FlexProps, Button } from "@chakra-ui/react";
import { blocked, crown } from "../../assets";

interface CustomItemProps extends FlexProps {
  image: any;
  icon: any;
  title: string;
  isDisabled?: boolean;
  width: string;
  height: string;
}

export const SpawnPickItem = ({
  image,
  title,
  icon,
  width,
  height,
  isDisabled,
  ...rest
}: CustomItemProps) => {
  function CheckIsDisabled() {
    if (title === "CASA") {
      return true;
    }
  }

  function OrganizationBar() {
    if (title === "ORGANIZAÇÃO") {
      return (
        <Flex
          border="2px solid #FFF6E9"
          borderRadius="17"
          mt="10px"
          w="160px"
          h="30px"
          justify="flex-end"
          align="center"
        >
          <Image src={crown} w="16" h="13"></Image>
        </Flex>
      );
    }
  }

  return (
    <Flex
      backgroundImage={image}
      flexDir="column"
      pt="9rem"
      width={width}
      height={height}
      align="center"
    >
      <Image src={icon}></Image>
      <Text color="#F5FFE9" fontWeight={500} fontSize="2rem" mt="20px">
        {title}
      </Text>
      <Flex>{OrganizationBar()}</Flex>
      <Image mt="65px" src={CheckIsDisabled() === true ? blocked : ""}></Image>
      <Button
        colorScheme="inherit"
        border="2px solid #FFF6E9"
        borderRadius="17"
        py="0"
        px="19px"
        _hover={{
          background: "#F5FFE9",
          color: "#15170F",
        }}
        isDisabled={CheckIsDisabled()}
        position="absolute"
        bottom="280px"
      >
        {CheckIsDisabled() === true ? "NÃO DISPONÍVEL" : "ENTRAR"}
      </Button>
    </Flex>
  );
};

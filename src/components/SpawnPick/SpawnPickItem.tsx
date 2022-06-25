import { Flex, Text, Image, FlexProps, Button } from "@chakra-ui/react";
import { blocked, crown } from "../../assets";
import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
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
          <Image src={crown} w="16" h="13" />
        </Flex>
      );
    }
  }

  return (
    <FlexMotion
      backgroundImage={image}
      flexDir="column"
      width={width}
      height={height}
      align="center"
      padding="70px 0px"
      justifyContent="space-around"
      cursor="pointer"
      whileHover={{
        y: [0, 30],
        transition: { duration: 0.5 },
      }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <Flex
        align="center"
        gap="27px 0px"
        justifyContent="center"
        flexDir="column"
      >
        <Image w="60px" h="60px" src={icon}></Image>
        <Text
          textAlign="center"
          color="#F5FFE9"
          fontWeight={500}
          fontSize="2rem"
        >
          {title}
        </Text>
        <Flex>{OrganizationBar()}</Flex>
      </Flex>
      <Image
        position="absolute"
        mt="65px"
        src={CheckIsDisabled() === true ? blocked : ""}
      />
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
      >
        {CheckIsDisabled() === true ? "NÃO DISPONÍVEL" : "ENTRAR"}
      </Button>
    </FlexMotion>
  );
};

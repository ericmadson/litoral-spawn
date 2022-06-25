import { Text, VStack, Box } from "@chakra-ui/react";

export function Header() {
  return (
    <Box>
      <VStack spacing={-8} mt="2rem">
        <Text color="white" fontSize="40px" fontWeight="600">
          SELECIONE
        </Text>
        <Text color="#FFC836" fontSize="80px" fontWeight="600">
          SEU SPAWN
        </Text>
      </VStack>
    </Box>
  );
}

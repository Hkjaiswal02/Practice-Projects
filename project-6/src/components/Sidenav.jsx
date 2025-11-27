import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Tansaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      bg={"white"}
    >
      <Box>
        <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem">
          Crypto
        </Heading>
        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              key={nav.text}
              py="3"
              px="4"
              color="#797E82"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}{" "}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mx="3" mt="6" mb="6">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          color="#797E82"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;

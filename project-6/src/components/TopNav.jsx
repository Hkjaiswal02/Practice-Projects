import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box p={"4"}>
      <HStack maxW={"70rem"} h="16" justify={"space-between"} mx={"auto"}>
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize={"28px"}>{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon as={IoPersonCircleOutline} fontSize={"24px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;

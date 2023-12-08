import { Flex, HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface AdminDataProps {
  selected?: boolean;
  textLabel: string;
  navIcon: IconType;
}

const AdminData: React.FC<AdminDataProps> = ({
  selected,
  textLabel,
  navIcon: Icon,
}) => {
  return (
    <Flex
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      _hover={{ color: "purple", cursor: "pointer" }}
      color={selected ? "purple" : "gray.800"}
      justifyContent={{ base: "center", md: "start" }}
    >
      <Icon size={20} />
      <Text
        ml={{ base: "0", md: "2" }}
        fontFamily="monospace"
        width={{ base: "65px", md: "120px" }}
        pl={{ base: "6px", md: "0" }}
        mt={{ base: "8px", md: "0" }}
      >
        {textLabel}
      </Text>
    </Flex>
  );
};

export default AdminData;

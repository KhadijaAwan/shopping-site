"use client";

import Image from "next/image";
import { Grid, GridItem, Flex, Box, Text, Center } from "@chakra-ui/react";
import { ProductCart } from "../../product/productInfo";

interface OrderItem {
  data: ProductCart;
}

const OrderProductData: React.FC<OrderItem> = ({ data }) => {
  return (
    <>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        width="100%"
        mb={5}
        alignItems="center"
      >
        <GridItem
          colSpan={2}
          alignItems="center"
          justifyItems="center"
          fontFamily="monospace"
        >
          <Flex alignItems="center" pl={{ base: "0", md: "10" }}>
            <Image
              src={data.photo.choosenImg}
              alt="product image"
              width={80}
              height={80}
              style={{ borderRadius: "5px" }}
            />
            <Box ml={{base:"2", md:"5"}}>
              <Text fontSize="13.5px">{data.name}</Text>
              <Text fontSize="10px" my={1}>
                {data.brand}
              </Text>
              <Text fontSize="10px">{data.photo.colorName}</Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={1}
          textAlign="center"
          fontFamily="monospace"
          fontSize="md"
        >
          ${data.price}
        </GridItem>
        <GridItem
          colSpan={1.5}
          textAlign="center"
          fontFamily="monospace"
          fontSize="md"
        >
          <Text>{data.quantity}</Text>
        </GridItem>
        <GridItem
          pr={2}
          colSpan={1}
          textAlign="center"
          fontFamily="monospace"
          fontSize="md"
        >
          ${data.price * data.quantity}
        </GridItem>
      </Grid>
      <Box width="100%" height="1.5px" bg="gray.300" px={4} mb={4}></Box>
    </>
  );
};

export default OrderProductData;

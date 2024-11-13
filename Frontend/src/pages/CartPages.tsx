import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
//import { useEffect, useState } from "react";
//import { BASE_URL } from "../constants/baseUrl";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useCart } from "../context/Cart/CartContext";

const CartPage = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4">My Cart</Typography>
      <Box display="flex" flexDirection="column" gap={4}>
        {cartItems.map((item) => (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              border: 1,
              borderColor: "#f2f2f2",
              borderRadius: 5,
              padding: 2,
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <img src={item.image} width={150}/>
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>
                  {item.quantity} x {item.unitPrice} DINAR
                </Typography>
              </Box>
            </Box>
            <ButtonGroup variant="contained" arial-label="Basic button group">
              <Button>-</Button>
              <Button>+</Button>
            </ButtonGroup>
            <Button>Remove item</Button>
          </Box>
        ))}
        <Box>
          <Typography variant="h4">Total Amount: {totalAmount.toFixed(2)} DINAR</Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default CartPage;

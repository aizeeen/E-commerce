import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
//import { useEffect, useState } from "react";
//import { BASE_URL } from "../constants/baseUrl";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useCart } from "../context/Cart/CartContext";

const CartPage = () => {
  const { cartItems, totalAmount, updateItemInCart } = useCart();

const handleQuantity = (productId:string, quantity: number) => {
  if (quantity <= 0) {
    return;
  }
  updateItemInCart(productId, quantity);
}



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
              <Button onClick={()=> handleQuantity(item.productId, item.quantity - 1 )}>-</Button>
              <Button onClick={()=> handleQuantity(item.productId, item.quantity + 1)}>+</Button>
            </ButtonGroup>
            <Button onClick={() => handleRemoveItem(item.productId)}>Remove item</Button>
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

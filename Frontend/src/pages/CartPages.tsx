import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
//import { useEffect, useState } from "react";
//import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";
import { useCart } from "../context/Cart/CartContext";
import { useState } from "react";

const CartPage = () => {
  const { token } = useAuth();
const { cartItems, totalAmount} = useCart()
  const [error, setError] = useState<string | undefined>(undefined);

 /* useEffect(() => {
    if (!token) {
      return;
    }

    const fetchCart = async () => {
      const response = await fetch(`${BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        setError("failed to fetch user cart. please try again");
      }

      const data = await response.json();
      setCart(data);
    };
    fetchCart();
  }, [token]);

  console.log({ cart });
  */
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4">My Cart</Typography>
      {cartItems.map((item) => (
        <div key={item.title}></div> ))}  
    </Container>
  );
};

export default CartPage;

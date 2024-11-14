
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";

import { useAuth } from "../context/Auth/AuthContext";

const MyOrdersPage = () => {
  const { getMyOrders, myOrders } = useAuth();

  useEffect(() => {
    if (myOrders.length == 0) {
      getMyOrders();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      fixed
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
        <Typography>My Orders</Typography>
        {myOrders.map(({adress, orderItems, total})=> (
        <Box sx={{ border: 1, borderColor: "gray" }}>
    <Typography>adress: {adress}</Typography>
    <Typography>items: {orderItems.length}</Typography>
    <Typography>total : {total}</Typography>
    </Box>
    ))}</Container>
  );
};

export default MyOrdersPage;

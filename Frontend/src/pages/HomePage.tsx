import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <ProductCard />
        </Grid>
        <Grid item md={4}>
          <ProductCard />
        </Grid>
        <Grid item md={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;

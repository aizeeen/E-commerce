import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface Props {
  _id: string;
  title: string;
  image: string;
  price: string;  // Assuming price is a number for simplicity. In a real-world application, it could be a string or a number with currency formatting.
}
export default function ProductCard({ _id, title, image, price  }: Props) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green" 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {price} DINAR
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
import  express  from "express";
import { getAllProducts } from "../services/productService";


const router = express.Router();

router.get("/", async (req, res) => {
    const products = await getAllProducts()
    res.status(200).send(products);
    // send the products back to the client
});

export default router;
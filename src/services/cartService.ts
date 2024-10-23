import { cartModel } from "../models/cartModel";
import productModel from "../models/productModel";

interface CreateCartForUser {
    userId: string;
}
const createCartForUser = async ({ userId, }: CreateCartForUser) => {
    const cart = await cartModel.create ({ userId, totalAmount: 0 });
    await cart.save();
    return cart;

}

interface GetActiveCartForUser {
    userId: string;
}

export const getActiveCartForUser = async ({ userId }: GetActiveCartForUser) => {
 let cart = await cartModel.findOne({ userId, status: "active"}); 
 
 if (!cart) {
    cart = await createCartForUser({ userId });
 }
 return cart;
}

interface addItemToCart {
    productId: any;
    quantity: number;  
    userId: string;
}

export const addItemToCart = async ({ 
    productId,
     quantity,
      userId,
     }: addItemToCart) => {
    const cart = await getActiveCartForUser({ userId }); 

    //does the item exist in the cart 
    const existsInCart = cart.items.find((p) => p.product === productId);

    if (existsInCart) {
        return { data : "item already in cart", statusCode: 400}
    }

    //idha ken product mch f cart naaml 
    const product = await productModel.findById(productId)

    if (!product) {
        return { data: "product not found", statusCode: 400 }
    }
    cart.items.push({
         product: productId,
         unitPrice: product.price,
         quantity 
        });
const updatedCart = await cart.save();

return { data: updatedCart, statusCode: 200 };
}
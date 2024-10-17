import productModel from "../models/productModel";

export const getAllProducts = async () => {
    return await productModel.find({});
}

export const seedInitialProducts = async () => {
    const products = [
        { title: "Test 1", image: "image1.jpg", price: 10, stock: 100 },
  ]


    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
        await productModel.insertMany(products);
    }
}
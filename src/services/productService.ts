import productModel from "../models/productModel";

export const getAllProducts = async () => {
    return await productModel.find({});
}

export const seedInitialProducts = async () => {
    const products = [
        { title: "Dell Laptop", image: "https://images.app.goo.gl/E4SLvCJN8UmgcgeZ9", price: 2100, stock: 10 },
  ]


    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
        await productModel.insertMany(products);
    }
}
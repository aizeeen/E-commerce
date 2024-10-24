import mongoose , { Schema, Document, ObjectId } from "mongoose"

export interface IOrderItem {
    producTitle: string;
    productImage : string;
    unitPrice: number;
    quantity: number;
}

export interface IOrder extends Document {
    orderItems: IOrderItem[];
    total: number;
    adress: string;
    userId: ObjectId | string; 
}

const orderItemSchema = new Schema<IOrderItem>({
    producTitle: { type: String, required: true },
    productImage : { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const OrderSchema = new Schema<IOrder>({
    orderItems : [orderItemSchema],
    total: { type: Number, required: true },
    adress: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
});

export const orderModel = mongoose.model<IOrder>("Order", OrderSchema);
import mongoose, { Schema, Document } from "mongoose";


export interface Iuser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;  
}

const userSchema = new Schema<Iuser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const userModel = mongoose.model<Iuser>("User", userSchema);

export default userModel;
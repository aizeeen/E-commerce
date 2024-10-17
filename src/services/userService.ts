import userModel from "../models/userModel";
import bcrypt from 'bcrypt';

interface RegisterParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export const register = async ({ firstName, lastName, email, password }: RegisterParams) => {
    const findUser = await userModel.findOne({ email })

    if (findUser) {
        return { data: "User already exists", statusCode: 400 }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({ email, password: hashedPassword, firstName, lastName})
    await newUser.save()
    return {
     data: newUser, statusCode: 200
    };

}

interface LoginParams {
    email: string;
    password: string;
}

export const login = async ({ email, password }: LoginParams) => {
    const findUser = await userModel.findOne({ email })

    if (!findUser){
         return { data: "incorrect email or password", statusCode: 400 }
        }

    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch){
        return { data: findUser, statusCode: 200 };
    }
    return { data: "incorrect email or password", statusCode: 400 }

}
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel";

interface ExtendRequest extends Request {
    user?: any;
}

const validateJWT = ( req: ExtendRequest, res: Response, next: NextFunction ) => {
    const authorizationHeader = req.get('authorization')

    if (!authorizationHeader){
        res.status(403).send("authorization header was not provided")
        return;
    }
    
    const token = authorizationHeader.split(" ")[1]
    if (!token){
        res.status(403).send("token not provided")
        return;
    } 

    jwt.verify(token, "Mx0uqXZeXYKiF2pYHCnJoMgx60fih6iG", async (err, payload)=> {
        if(err){
            res.status(403).send("invalid token")
            return;
        }

        if (!payload){
            res.send(403).send("invalid token payload")
            return;
        }

        const userPayload = payload as {
            email: string;
            firstName: string;
            lastName: string;
        };

        // fetch user from databse based on the payload
        const user = await userModel.findOne({ email: userPayload.email });
        req.user = user;
        next();
    })
}


export default validateJWT;
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "Yoku1510*";

export const verificarJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Token no proporcionado o inválido",
            data: null
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as any).usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Token inválido o expirado",
            data: null
        });
    }
};

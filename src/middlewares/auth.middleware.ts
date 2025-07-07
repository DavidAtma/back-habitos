import { Request, Response, NextFunction } from "express";
import { verificarToken } from "../shared/jwt.utils";
import { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  usuario?: string | JwtPayload;
}

export const verificarJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Token no proporcionado o inválido",
      data: null
    });
    return;
  }

  const token = authHeader.split(" ")[1];

  const decoded = verificarToken(token);
  if (!decoded) {
    res.status(401).json({
      success: false,
      message: "Token inválido o expirado",
      data: null
    });
    return;
  }

  req.usuario = decoded;
  next();
};

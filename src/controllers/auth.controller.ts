import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { BaseResponse } from "../shared/base-response";

export const login = async (req: Request, res: Response): Promise<void> => {
  const { correo, contrasena } = req.body;

  if (!correo || !contrasena) {
    res.status(400).json(BaseResponse.error("Correo y contraseña requeridos", 400));
    return;
  }

  try {
    const result = await authService.login(correo, contrasena);

    if (!result) {
      res.status(401).json(BaseResponse.error("Credenciales incorrectas", 401));
      return;
    }

    res.status(200).json(BaseResponse.success(
      {
        token: result.token,
        usuario: result.usuario
      },
      "Inicio de sesión exitoso"
    ));

  } catch (error: any) {
    console.error("Error en login:", error);
    res.status(500).json(BaseResponse.error("Error interno del servidor"));
  }
};

import { verifyAccessToken } from "../config/jwt.js";

const publicRoutes = ["/auth/login", "/auth/resgister"];

export const authMiddleware = (req, res, next) => {
    if (publicRoutes.includes(req.path)) {
        return next();

    }
    console.log(req.headers.authorization);
    const [type, token] = req.headers.authorization?.split(" ") || [];
    console.log(type, token);
   if (!token || type !== "Bearer") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.user = verifyAccessToken(token);
  next();
}; 
  
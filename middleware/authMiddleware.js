import { UnauthenticatedError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("authentication invalid!");
  try {
    const { userId, userRole } = verifyJWT(token);
    req.user = { userId, userRole };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication failed!");
  }
};

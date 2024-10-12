import { jwtDecode } from "jwt-decode";

export const getUserInfoFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const { email, id } = decodedToken;
    console.log(id);
    return { email, id };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

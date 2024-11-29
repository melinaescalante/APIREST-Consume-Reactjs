import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
export const PrivateRoute=({children})=>{
const {user}=useContext(AuthContext)
return user? children: <Navigate to='/login'></Navigate>
}
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


const ProtectedRoute = ({children}) => { //children adalah komponen yg mau kita akses
    const token = localStorage.getItem("accessToken");

    if (!token) {
        return <Navigate to="/login" />;
    }
    return <>{children || <Outlet/>}</>;
};

export default ProtectedRoute;
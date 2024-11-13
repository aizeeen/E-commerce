import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/Auth/AuthContext"


const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    //console.log("protected route")
    return <Outlet />
}

export default ProtectedRoute;
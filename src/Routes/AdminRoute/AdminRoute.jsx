import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <CircularProgress color="success" />
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;
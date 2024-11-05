import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children, allowedRoles }:any) => {
    const userType = Cookies.get('userType');

    if (!userType) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(userType)) {
        return <Navigate to="/404" />;
    }

    return children;
};

export default ProtectedRoute;
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children, allowedRoles }:any) => {
    const userType = Cookies.get('userType');
    console.log(userType)

    if (!userType) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(userType)) {
        return <Navigate to="/not-found" />;
    }

    return children;
};

export default ProtectedRoute;
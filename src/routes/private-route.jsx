import { replace, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function PrivateRoute({ children }) {
    const user = useAuth();
    const navigate = useNavigate();
    
    if (!user) {
        navigate('/', replace)
    }
    return children;
}

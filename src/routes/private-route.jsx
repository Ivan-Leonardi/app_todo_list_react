import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function PrivateRoute({ children }) {
    const {user, loading} = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <div>Carregando...</div>;
    }
    
    if (!user) {
        navigate('/', {replace: true})
    }
    return children;
}

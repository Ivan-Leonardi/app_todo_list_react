import { Routes, Route } from 'react-router-dom';
import { Register } from '../pages/Register';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/register' element={<Register />}/>
        </Routes>
    )
}
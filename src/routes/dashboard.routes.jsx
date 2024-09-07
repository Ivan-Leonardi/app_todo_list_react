import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

export function Dashboard() {
    return (
        <Routes>
            <Route path='/dashboard' element={<Home />}/>
        </Routes>
        
    )
}

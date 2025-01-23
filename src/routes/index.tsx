import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@screens/Home.tsx";
import NotFound from "@screens/NotFound.tsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

import { Routes, Route } from "react-router-dom";
import Products from "./Products-Sec";
import Details from "./Details-Sec";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    );
}
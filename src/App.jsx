//App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Historial from "./pages/Historial";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/*" element={<h1>Page not found - error 404</h1>} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

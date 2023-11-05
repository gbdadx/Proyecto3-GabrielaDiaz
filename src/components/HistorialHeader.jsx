import { useNavigate } from "react-router-dom";

export default function HistorialHeader() {
    const navigate = useNavigate();

  return (
    <h1 className="center separador">Ver Historial <span className="irAhistorial" onClick={() => navigate(-1)}>📋</span></h1>

  )
}

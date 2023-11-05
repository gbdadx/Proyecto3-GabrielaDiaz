import { useNavigate } from "react-router-dom";

export default function IndexHeader() {
    const navigate = useNavigate();

  return (
    <header>
    <h1 className="center separador">Seguros del hogar <span className="irAhistorial" title="Ir a historial" onClick={() => navigate('/historial')}>🏡</span></h1>
    </header>
  )
}

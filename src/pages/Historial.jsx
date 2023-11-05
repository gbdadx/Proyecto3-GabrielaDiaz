//Historial.jsx
import HistorialButtons from "../components/HistorialButtons";
import HistorialTable from "../components/HistorialTable";
import { useNavigate } from "react-router-dom";

export default function Historial() {
  const historialJSON = localStorage.getItem("historialCotizaciones");
  const historial = JSON.parse(historialJSON);
  const navigate = useNavigate();
  

  console.log(historial);
  return (
  
    <main className="historial">
      <h1 className="center separador">Ver Historial <span className="irAhistorial" onClick={() => navigate(-1)}>📋</span></h1>
      <div className=" center div-cotizador">
        <HistorialTable historial={historial} />
        <div className="center separador botonesHistorial" style={{ position:'absolute', bottom:'0', left:'0', right:'0', margin:'1rem auto',  justifyContent:'space-around'}} >
          <HistorialButtons />
        </div>
      </div>
      </main>
   
  );
}

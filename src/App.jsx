import  { useEffect, useState } from "react";
import Axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historial from "./pages/Historial"; // Importa el componente Historial
import Index from "./pages/Index"; // Importa el componente Historial

export default function App() {
  const [data, setData] = useState([]);
  const [datosPropiedad, setDatosPropiedad] = useState([]);
  const [datosUbicacion, setDatosUbicacion] = useState([]);
  const rutaRelativa = "./src/datos.json";

  useEffect(() => {
    Axios.get("./src/datos.json")
      .then((response) => {
        setData(response.data);

        const datosPropiedad = response.data
          .filter((item) => item.categoria === "propiedad")
          .map((item) => ({ tipo: item.tipo, factor: item.factor }));

        const datosUbicacion = response.data
          .filter((item) => item.categoria === "ubicacion")
          .map((item) => ({ tipo: item.tipo, factor: item.factor }));

        setDatosPropiedad(datosPropiedad);
        setDatosUbicacion(datosUbicacion);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);

  // Puedes verificar el contenido de 'data' aquí.
  console.log("data:", data);
  console.log("datosPropiedad:", datosPropiedad);
  console.log("datosUbicacion:", datosUbicacion);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index datosPropiedad={datosPropiedad} datosUbicacion={datosUbicacion} />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/*" element={<h1 style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', paddingTop:'10rem' }}>Page not found - error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

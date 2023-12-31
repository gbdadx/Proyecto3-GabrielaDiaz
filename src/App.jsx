import { useEffect, useState } from "react";
import Axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historial from "./pages/Historial";
import Index from "./pages/Index";

export default function App() {
  const [data, setData] = useState([]);
  const [datosPropiedad, setDatosPropiedad] = useState([]);
  const [datosUbicacion, setDatosUbicacion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://apimocha.com/proyecto3/example");
        setData(response.data);

        const datosPropiedad = response.data
          .filter((item) => item.categoria === "propiedad")
          .map((item) => ({ tipo: item.tipo, factor: item.factor }));

        const datosUbicacion = response.data
          .filter((item) => item.categoria === "ubicacion")
          .map((item) => ({ tipo: item.tipo, factor: item.factor }));

        setDatosPropiedad(datosPropiedad);
        setDatosUbicacion(datosUbicacion);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);


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


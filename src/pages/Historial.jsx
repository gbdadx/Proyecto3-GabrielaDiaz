//Historial.jsx
import Footer from "../components/Footer";
import HistorialButtons from "../components/HistorialButtons";
import HistorialHeader from "../components/HistorialHeader";
import HistorialTable from "../components/HistorialTable";


export default function Historial() {
  const historialJSON = localStorage.getItem("historialCotizaciones");
  const historial = JSON.parse(historialJSON);

  console.log(historial);
  return (
    <>
      <HistorialHeader />
      <main className="historial">
        <div className=" center div-cotizador">
          <HistorialTable historial={historial} />
          <div
            className="center separador botonesHistorial"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "1rem auto",
              justifyContent: "space-around",
            }}
          >
            <HistorialButtons />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

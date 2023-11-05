import { useNavigate } from "react-router-dom";

export default function HistorialButtons() {
  const navigate = useNavigate();

  return (
    <>
      <button className="button button-outline" onClick={() => navigate(-1)}
      style={{marginRight:'2rem'}}>
        VOLVER
      </button>
      <button
        className="button button-outline"
        onClick={() => {
          const td = document.querySelectorAll("td");
          for (let e of td) {
            e.innerText = "";
          }
          localStorage.removeItem("historialCotizaciones");
        }}
      >
        BORRAR 
      </button>
    </>
  );
}

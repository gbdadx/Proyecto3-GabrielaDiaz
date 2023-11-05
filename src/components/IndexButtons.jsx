import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
export default function IndexButtons(props) {
    const navigate = useNavigate();
    const { borrarSeleccion, guardarEnHistorial } = props;



    const alerta = (titulo, mensaje, icono) => {
      Swal.fire({
        icon: icono || "",
        title: titulo || "",
        text: mensaje,
        showConfirmButton: false,
        timer: 3500,
        width: "15rem",
      });
    };
  
    const toast = () => {
      Toastify({
        text: "Cotización guardada.",
        duration: 4000,
        newWindow: true,
        gravity: "top",
        position: "right",
        style: {
          background: "CornflowerBlue",
        },
      }).showToast();
    };
  

  return (
    <div>

    <button className="button button-outline" onClick={borrarSeleccion}>
      Borrar Seleccion
    </button>

    <button
      className="button button-outline"
      onClick={guardarEnHistorial}
    >
      guardar en historial
    </button>
    <button type="submit" className="button button-outline" onClick={(e)=>{
     e.preventDefault;
      navigate('/historial')}}>
      ir a historial
    </button>
  </div>
  )
}

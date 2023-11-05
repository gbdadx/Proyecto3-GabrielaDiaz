import { useState, useEffect } from "react";
import "./index.css";
import { datosPropiedad, datosUbicacion } from "./datosJson";
import IndexButtons from "../components/IndexButtons";
import IndexInputs from "../components/IndexInputs";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [selectPropiedad, setSelectPropiedad] = useState("");
  const [selectUbicacion, setSelectUbicacion] = useState("");
  const [inputMetros2, setInputMetros2] = useState(20);
  const [valorPoliza, setValorPoliza] = useState(0);
  const [factorUbi, setFactorUbi] = useState(0);
  const [factorTipo, setFactorTipo] = useState(0);
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);
  const navigate = useNavigate();
  const btnCotizar = document.querySelector("button.button.button-outline")
  const btnEnviar = document.querySelector("span.guardar")
  function borrarSeleccion() {
    // Restablece los valores al original
    setSelectPropiedad(datosPropiedad[0].tipo);
    setSelectUbicacion(datosUbicacion[0].tipo);
    setInputMetros2(20);
    setValorPoliza(0);
    setFactorTipo(0);
    setFactorUbi(0);
    setHistorialCotizaciones([]);
  }

  const historialGuardado = localStorage.getItem("historialCotizaciones");
  const historialParseado = JSON.parse(historialGuardado);

  const handlePropiedadChange = (e) => {
    const selectedValue = e.target.value;




    const selectedFactor =
      datosPropiedad.find((propiedad) => propiedad.tipo === selectedValue)
        ?.factor || 1;
    setSelectPropiedad(selectedValue);
    setFactorTipo(selectedFactor);
  };

  const handleUbicacionChange = (e) => {
    const selectedValue = e.target.value;
    const selectedFactor =
      datosUbicacion.find((ubicacion) => ubicacion.tipo === selectedValue)
        ?.factor || 1;
    setSelectUbicacion(selectedValue);
    setFactorUbi(selectedFactor);
  };

  useEffect(() => {
    // Cargar datos de propiedad y ubicación al cargar el componente
    setSelectPropiedad(datosPropiedad[0].tipo);
    setSelectUbicacion(datosUbicacion[0].tipo);
  }, []);

  useEffect(() => {
    if (historialParseado) {
      setHistorialCotizaciones(historialParseado);
    } else {
      // Si no hay historial guardado en localStorage, inicializa historialCotizaciones como un array vacío.
      setHistorialCotizaciones([]);
    }
  }, []);

  /**cotizacion  */
  const loader = ()=> `<img src="images/Ellipsis-1.1s-44px.gif" width="40px">`

  function datosCompletos() {
    return selectPropiedad !== '...' && selectUbicacion !== '...' && inputMetros2 >= 20;
  }
  
  function realizarCotizacion (){
    datosCompletos()
      ? cotizar()
      : alerta("", "Debes completar todos los datos en pantalla..", "warning");}

  function cotizar() {
    btnCotizar.innerHTML = loader()
    // Cotización
    const costoM2 = 34.86;
    const metros2 = inputMetros2;
    const poliza = (costoM2 * metros2 * factorUbi * factorTipo).toFixed(2);
    setValorPoliza(poliza);

    // Crear un objeto de cotización
    const cotizacion = {
      fechaCotizacion: new Date().toLocaleString(),
      propiedad: selectPropiedad,
      ubicacion: selectUbicacion,
      metrosCuadrados: inputMetros2,
      poliza: poliza,
    };

    // Actualizar el estado con la nueva cotización
    setHistorialCotizaciones([...historialCotizaciones, cotizacion]);
    setTimeout(() => {
     
           alerta('', 'Cotización realizada con éxito.', 'success')
           btnEnviar.classList.remove("ocultar")   
           btnCotizar.innerText = "cotizar"        
     }, 2500)
    // Mostrar notificación de cotización guardada
    
  }

  function guardarEnHistorial() {
    if(datosCompletos()){
        localStorage.setItem("historialCotizaciones",JSON.stringify(historialCotizaciones));        
    alerta("", "Historial guardado exitosamente");
    toast();
    } else{
        alerta("", "Debes completar todos los datos en pantalla..", "warning");}
    }
  

  function  alerta (titulo, mensaje, icono) {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 3500,
      width: "15rem",
    });
  }

  function toast() {
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
  }

  console.log({selectPropiedad})
  console.log({selectUbicacion})
  console.log({inputMetros2})

  return (
    <>
    <main>
      <header>
      <h1 className="center separador">Seguros del hogar <span className="irAhistorial" title="Ir a historial" onClick={() => navigate('/historial')}>🏡</span></h1>
      </header>
      <div className="center div-cotizador">
        <div className="inputs">
          <IndexInputs
            selectPropiedad={selectPropiedad}
            handlePropiedadChange={handlePropiedadChange}
            datosPropiedad={datosPropiedad}
            selectUbicacion={selectUbicacion}
            handleUbicacionChange={handleUbicacionChange}
            datosUbicacion={datosUbicacion}
            inputMetros2={inputMetros2}
            setInputMetros2={setInputMetros2}
          />
        </div>
        <>
          <div className="center separador">
            <button className="button button-outline" onClick={realizarCotizacion}>
              Cotizar
            </button>
          </div>
          <div className="center separador">
            <p className="importe">
              Precio estimado: $ <span type="button" id="valorPoliza">{valorPoliza}</span>
              <span
                className="guardar"
                title="Guardar en historial"
                onClick={guardarEnHistorial}
              >
                💾
              </span>
            </p>
          </div>
          <IndexButtons
            borrarSeleccion={borrarSeleccion}
            guardarEnHistorial={guardarEnHistorial}
          />
        </>
      </div>
    </main>
      </>

  );
  
}

import { useNavigate } from "react-router-dom";

export default function IndexButtons(props) {
    const navigate = useNavigate();
    const { borrarSeleccion, guardarEnHistorial } = props;

  return (
    <div id="botonesMi" >

    <button className="button button-outline botonesMi" onClick={borrarSeleccion}>
      Borrar Seleccion
    </button>

    <button
      className="button button-outline botonesMi"
      onClick={guardarEnHistorial}
    >
      guardar en historial
    </button>
    <button type="submit" className="button button-outline botonesMi" onClick={(e)=>{
     e.preventDefault;
      navigate('/historial')}}>
      ir a historial
    </button>
  </div>
  )
}

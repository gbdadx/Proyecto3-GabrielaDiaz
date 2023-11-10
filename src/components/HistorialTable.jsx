//HistorialTable.jsx
import '/src/index.css';

export default function HistorialTable(props) {
  const historial = props.historial || []; // 

  return (
    <div style={{marginBottom:'1rem', paddingBottom:'3rem'}} >
      <table className="table">
        <thead>
          <tr>
            <th>Fecha de cotizacion</th>
            <th>Propiedad</th>
            <th>Ubicación</th>
            <th>Metros cuadrados</th>
            <th>Póliza mensual</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.fechaCotizacion}</td>
              <td>{cotizacion.propiedad}</td>
              <td>{cotizacion.ubicacion}</td>
              <td>{cotizacion.metrosCuadrados}</td>
              <td>{cotizacion.poliza}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
}

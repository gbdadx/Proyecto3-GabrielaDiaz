
export default function IndexInputs(props) {
  let {
    selectPropiedad,
    handlePropiedadChange,
    datosPropiedad,
    selectUbicacion,
    handleUbicacionChange,
    datosUbicacion,
    inputMetros2,
    setInputMetros2,
  } = props;


  return (
    <>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select required
        value={selectPropiedad || ""}
        id="propiedad"
        onChange={handlePropiedadChange}
      >
        <option disabled>...</option>
        {datosPropiedad.map(
          (
            propiedad,
            index // Agrega un índice como clave
          ) => (
            <option key={index} value={propiedad.tipo}>
              {propiedad.tipo}
            </option>
          )
        )}
      </select>

      <label htmlFor="ubicacion">Selecciona su ubicación</label>
      <select required 
        value={selectUbicacion || ""}
        id="propiedad"
        onChange={handleUbicacionChange}
      >
        {datosUbicacion.map((ubicacion, index) => (
          <option key={index} value={ubicacion.tipo}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>

      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input 
        type="number"
        id="metros2"
        value={inputMetros2}
        min="20"
        max="500"
        step="1"
        onChange={(e) => setInputMetros2(e.target.value)}
        
      />
    </>
  );
}

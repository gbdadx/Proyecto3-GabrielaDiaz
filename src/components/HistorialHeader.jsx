import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapperH = styled.header`
  width: 100vw;
  height: fit-content;
  text-align: center;
  color: white;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export default function HistorialHeader() {
  const navigate = useNavigate();

  return (
    <HeaderWrapperH>
      <h1 className="center separador">
        Ver Historial{" "}
        <span className="irAhistorial" onClick={() => navigate(-1)}>
          📋
        </span>
      </h1>
    </HeaderWrapperH>
  );
}

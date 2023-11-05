import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
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
  margin-top: 2rem;
`;

export default function IndexHeader() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <header className="header">
        <h1 className="center separador">
          Seguros del hogar{" "}
          <span
            className="irAhistorial"
            title="Ir a historial"
            onClick={() => navigate("/historial")}
          >
            🏡
          </span>
        </h1>
      </header>
    </HeaderWrapper>
  );
}

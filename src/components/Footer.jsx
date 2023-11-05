import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  height: 7vh;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  font-weight: 800;
  position: absolute;
  margin-top: 0px;
  padding-top: 0px;
  left: 0%;
  top: 108%;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div>© 2023 Gabriela B. Diaz</div>
      </footer>
    </FooterWrapper>
  );
}

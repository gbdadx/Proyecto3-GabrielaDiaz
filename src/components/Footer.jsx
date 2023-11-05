import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  height: 7vh;
  text-align: center;
  font-size: 2rem;
  color: white;
  font-weight: 800;
  display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
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

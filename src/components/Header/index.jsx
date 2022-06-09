import styled from "styled-components"
import theme from "../../theme"
import { ReactComponent as IconDown } from "../../assets/down.svg"
import { ReactComponent as IconNotification } from "../../assets/notification.svg"
import { Link } from "react-router-dom"

const ContainerHeader = styled.header`
  background-color: ${theme.primary};
`

const TituloSite = styled(Link)`
  color: ${theme.textWhite};
  text-decoration: none;
  padding-left: 1rem;
`

const Nav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: ${theme.background};
  padding: 1em 0;
  background-color: ${theme.primary};
  font-family: ${theme.logoFont};
  font-size: ${theme.logoSize};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Imagem  = styled.img`
  border-radius: 50%;
  padding: 0;
  margin: 0 .5rem;
  border: .1rem ${theme.border} solid;
`

function Header() {

  return(
    <ContainerHeader>
      <Nav>
        <div>
          <TituloSite to="/">PROINFE</TituloSite>
        </div>
        <Icones>
          <Link to="/">
            <IconNotification />
          </Link>
          <Link to="/">
            <Imagem src="/images/person.png" alt="Foto de perfil" />
          </Link>
          <Link to="/">
            <IconDown />
          </Link>
        </Icones>
      </Nav>
    </ContainerHeader>
  );
}

export default Header
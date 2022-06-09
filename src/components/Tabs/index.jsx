import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import theme from "../../theme"

const ContainerAba = styled.div`
  background-color: ${theme.background};
  padding: .5rem 24px;
`
const Item = styled(Link)`
  padding: .5rem 1rem;
  margin-right: .3em;
  border-radius: .5rem .5rem 0 0 ;
  color: ${theme.textSecondary};
  font-size: 12px;
  text-decoration: none !important;
  background-color: #E0E0E0;
  font-family: ${theme.textFont};

  &:hover {
    background-color: ${theme.primary};
    color: #FFFFFF;
  }

  ${props => props.atual && css`
    background-color: ${theme.primaryDark};
    color: #FFFFFF;
  `}
`

function Tabs({tabs}) {

  return(
    <>
      <ContainerAba>
        {tabs.map(a => (
          <>
            <Item 
              atual={a.atual} 
              to={a.link}
            >
              {a.titulo}
            </Item>
          </>
        ))}
      </ContainerAba>
    </>
  )
}

export default Tabs
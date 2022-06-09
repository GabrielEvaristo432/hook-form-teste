import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import theme from "../../theme"

const ContainerPagination = styled.nav`
  background-color: ${theme.background};
  border: .1em ${theme.border} solid;
  display: flex;
  padding-left: .6rem;
`

const Item = styled(Link)`
  
  display: inline-block;
  font-family: ${theme.textFont};
  font-size: ${theme.textSize};
  text-decoration: none;
  color: ${theme.textPrimary};
  background-color: ${theme.foreground};
  padding: .8rem;
  border: .1rem ${theme.border} solid;
  border-radius: .5rem;
  margin: .5rem;

  &:hover {
    background-color: ${theme.primary};
    color: ${theme.textWhite};
  }

  ${props => props.selected && css`
    background-color: ${theme.primary};
    color: ${theme.textWhite};
  `}
`

function Pagination({pages}){

  return(
    <ContainerPagination>
      {pages.map(p => (
        <Item 
          to={p.link}
          selected={p.selected}
          title={"Ir para a página " + p.id}
        >{p.id}</Item>
      ))}
    </ContainerPagination>
  )
}

export default Pagination
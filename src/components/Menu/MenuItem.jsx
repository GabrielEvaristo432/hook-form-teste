import styled from "styled-components"
import theme from "../../theme"

const MenuItem = styled.li`

 
  margin: 5px 5px;
  
  & a {
    text-decoration: none;
    display: block;
    padding: .8rem;
    color: ${theme.textPrimary};
    border-radius: .5rem;
    display: flex;
    align-items: center;
  }

  & a:hover {
    background-color: ${theme.background};
  }
`

export default MenuItem
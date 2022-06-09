import styled, { css } from "styled-components"
import theme from "../../theme"

const Button = styled.button`
  
  padding: 1em 1.5em;
  cursor: pointer;
  border: 0;
  border-radius: .5em;
  color: ${theme.foreground};
  background-color: ${theme.primary};
  font-family: ${theme.textFont};
  border: .1rem ${theme.primary} solid;
  margin-left: 1rem;

  &:hover {
    background-color: ${theme.primaryDark};
  }

  & a {
    text-decoration: none;
  }

  ${props => props.danger && css`
    background-color: ${theme.foreground};
    color: ${theme.danger}
    border: 0;
  `}

  ${props => props.secondary && css`
    background-color: ${theme.foreground};
    color: ${theme.primary};
    
    &:hover {
      background-color: ${theme.primary};
      color: ${theme.textWhite}
    }
  `}
` 

export default Button
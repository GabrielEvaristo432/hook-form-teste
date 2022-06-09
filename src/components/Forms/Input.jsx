import styled, { css } from "styled-components"
import theme from "../../theme"

const Input = styled.input`
  border: .1em ${theme.text} solid;
  border-radius: .5em;
  outline: none;
  padding: 1em;
  color: ${theme.textSecondary};
  font-family: ${theme.textFont};
  font-size: 12px;
  
  display: inline-block;

  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
` 

export default Input
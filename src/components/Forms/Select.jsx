import styled, { css } from "styled-components"
import theme from "../../theme"

const Select = styled.select`
  border: .1em ${theme.border} solid;
  border-radius: .5em;
  outline: none;
  padding: 1em;
  color: ${theme.textSecondary};
  font-family: ${theme.textFont};
  font-size: 12px;
  background-color: #FFFFFF;
  font-weight: 500;
  line-height: 15px;

  ${props => props.fullWidth && css`
    width: 100%;
  `}
` 

export default Select
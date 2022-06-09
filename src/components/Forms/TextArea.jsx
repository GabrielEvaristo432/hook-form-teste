import styled, { css } from "styled-components"
import theme from "../../theme"

const Textarea = styled.textarea`
  border: .1em ${theme.text} solid;
  border-radius: .5em;
  outline: none;
  padding: 1em;
  //margin: 12px 24px;
  color: ${theme.textSecondary};
  font-family: ${theme.textFont};
  font-size: 12px;

  ${props => props.fullWidth && css`
    width: 100%;
  `}
` 

export default Textarea
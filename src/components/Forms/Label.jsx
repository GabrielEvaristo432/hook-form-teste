import styled from "styled-components"
import theme from "../../theme"

const Label = styled.label`
  color: ${theme.textPrimary};
  font-family: ${theme.textFont};
  font-size: ${theme.textSize};
  padding-bottom: .3rem;
  display: inline-block;
  width: 100%;
` 

export default Label
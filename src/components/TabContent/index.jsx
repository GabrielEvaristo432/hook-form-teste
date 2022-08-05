import styled, { css } from "styled-components"
import theme from "../../theme"

const TabContent = styled.div`

  display: none;

  ${props => props.showTab && css`
    display: inline-block;
  `}

`

export default TabContent

import styled, { css } from "styled-components"
import theme from "../../theme"

const TabItem = styled.li`
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

  ${props => props.active && css`
    background-color: ${theme.primaryDark};
    color: #FFFFFF;
  `}
`

export default TabItem

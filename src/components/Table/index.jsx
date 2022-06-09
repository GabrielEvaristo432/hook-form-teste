import styled from "styled-components"
import theme from "../../theme"

const Table = styled.table`
  width: 100%;
  border: .1em black solid;
  border-radius: .5rem;
  border-collapse: collapse;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  background-color: #FFFFFF;
  margin: 1rem;

  & td, th {
    border: .1em ${theme.foreground} solid;
    padding: 1em;
  }

  & th {
    font-size: ${theme.textSize};
    color: ${theme.textSecondary};
  }

  & td {
    font-size: ${theme.textSize};
    color: ${theme.textPrimary};
  }

  & tr:nth-child(odd) {
    background-color: ${theme.oddTable};
  }

  & thead > tr:nth-child(1) {
    background-color: #FFFFFF;
  }

  & tbody > tr:hover {
    background-color: ${theme.hoverTable};
    color: ${theme.textPrimary};
  }
`

export default Table
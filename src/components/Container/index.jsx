import styled, { css } from "styled-components"

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${props => props.row && css`
    flex-direction: row;
  `}

  ${props => props.spacebetween && css`
    justify-content: space-between;
  `}
` 

export default Container
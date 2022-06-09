import styled, { css } from "styled-components"

const FormItem = styled.div`

  flex-grow: 1;
  padding: .7rem;

  & input, select {
    width: 100%;
  }

  /* background-color: aliceblue; */
  /* Para testar o alinhamento */
  /* border: 1px red solid; */

  ${props => props.flexd && css`
    display: flex;
    flex-direction: row-reverse;
  `}

  ${props => props.g1 && css`
    flex-grow: 1;
  `}

  ${props => props.g2 && css`
    flex-grow: 2;
  `}

  ${props => props.g3 && css`
    flex-grow: 3;
  `}

  ${props => props.g4 && css`
    flex-grow: 4;
  `}
` 

export default FormItem
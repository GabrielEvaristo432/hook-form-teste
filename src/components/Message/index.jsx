import theme from "../../theme"
import styled, { css } from "styled-components"
import IconSuccess from "../../assets/message-success.svg"
import IconDanger from "../../assets/message-danger.svg"
import IconWarning from "../../assets/message-warning.svg"
import IconClose from "../../assets/close.svg"


const Message = styled.div`
  
  background-color: ${theme.primary};
  color: ${theme.textWhite};
  font-family: ${theme.textFont};
  font-size: ${theme.textSize};
  padding: 1rem;
  margin: 1rem 1.7rem;
  border-radius: .5rem;
  display: flex;
  align-items: center;

  &:before {
    content: url(${IconSuccess});
    padding-right: .5rem;
  }

  //
  //&:after {
    //content: url(${IconClose});
    //position: absolute;
    //right: 0;
    //cursor: pointer;
  //}

  ${props => props.success && css`
    background-color: ${theme.success};  
  `}

  ${props => props.danger && css`
    background-color: ${theme.danger};
    
    &:before {
      content: url(${IconDanger});
    }
  `}

  ${props => props.warning && css`
    background-color: ${theme.warning};
    color: ${theme.textPrimary};

    &:before {
      content: url(${IconWarning});
    }
  `}
`


export default Message
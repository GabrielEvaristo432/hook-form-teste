import { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../../theme"
import CheckIcon from "../../assets/checkbox-checked.svg"
import UnCheckIcon from "../../assets/checbox-unchecked.svg"

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  display: none;
  position: relative;
  left: 1rem;
`

const Text = styled.label`
  padding-left: .3rem;
  font-size: ${theme.textSize};
  font-family: ${theme.textFont};
  color: ${theme.textPrimary};
  cursor: pointer;
`

const StyledCheckbox = styled.label`
  cursor: pointer;
`

function Checkbox({label, checked}) {

  const [checkedStatus, setCheckedStatus] = useState(false)
  const [src, setSrc] = useState(UnCheckIcon)
   
  function handleCheckboxChange(){
    setCheckedStatus(!checkedStatus)
    checkedStatus ? setSrc(UnCheckIcon) : setSrc(CheckIcon)
  }

  useEffect(() => {
    if (checked) handleCheckboxChange()
  }, [])
  
  // TODO: retornar o estado
  
  return(
    <CheckboxContainer
      checked={checkedStatus}
      onClick={handleCheckboxChange}
    >
      <HiddenCheckbox
        onChange={handleCheckboxChange}
        checked={checkedStatus}  
      />
      <StyledCheckbox checked={checkedStatus}>
        <img src={src} alt="Checbox icon" />
      </StyledCheckbox>
      <Text checked={checkedStatus}>{label}</Text>
    </CheckboxContainer>
  )
}

export default Checkbox
import InputMask from "react-input-mask"
import Input from "./Input"

function MaskInput({id, type, mask, value, onChange, placeholder, style}){

  return(
    <>
      <InputMask
        mask={mask}
        value={value}
        onChange={onChange}
      >
        {(inputProps) => <Input {...inputProps} type={type} id={id} placeholder={placeholder} style={style} />}
      </InputMask>
    </>
  )
}

export default MaskInput

import { Link } from "react-router-dom"
import Title from "../../components/Title"
import SubTitle from "../../components/SubTitle"
import HeaderForm from "../../components/HeaderForm"
import Form from "../../components/Forms/Form"
import FormGroup from "../../components/Forms/FormGroup"
import FormItem from "../../components/Forms/FormItem"
import Label from "../../components/Forms/Label"
import Input from "../../components/Forms/Input"
import Select from "../../components/Forms/Select"
import Option from "../../components/Forms/Option"
import Textarea from "../../components/Forms/TextArea"
import Button from "../../components/Forms/Button"
import Tabs from "../../components/Tabs"
import MaskInput from "../../components/Forms/MaskInput"
import InputMask from "react-input-mask"
import { useState } from "react"

function FormularioPasso2(){

  // Informações sobre as abas
  const tabs = [
    { "id": 1, "titulo": "1) Início", "link": "/exemplo/passo1" },
    { "id": 2, "titulo": "2) Identificação", "link": "/exemplo/passo2", "atual": "atual" },
    { "id": 3, "titulo": "3) Documentos", "link": "/exemplo/passo3" },
  ]

  const [cep, setCep] = useState("")

  return(
    <>
      <HeaderForm>
        <Title>Cadastrar funcionário</Title>
        <SubTitle>Funcionário da escola</SubTitle>
        <Tabs tabs={tabs} />
      </HeaderForm>

      <Form>

        <FormGroup>
          <FormItem>
            <Label htmlFor="cep">CEP:</Label>
            <MaskInput
              id="cep"
              mask="99.999-999"
              type="text"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="cidade">Cidade:</Label>
            <Select fullWidth id="cidade">
              <Option value="09988">Ji-Paraná</Option>
              <Option value="09987">Vilhena</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="observacoes">Observações:</Label>
            <Textarea 
              id="observacoes"
              fullWidth
            >  
            </Textarea>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/exemplo/passo3">
              <Button>Próximo</Button>
            </Link>
            <Link to="/exemplo/passo1">
              <Button secondary>Anterior</Button>
            </Link>
          </FormItem>
        </FormGroup>

      </Form>
    </>
  )
}

export default FormularioPasso2
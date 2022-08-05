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
// import Tabs from "../../components/Tabs"

function FormularioPasso3(){

  // Informações sobre as abas
  // const tabs = [
  //   { "id": 1, "titulo": "1) Início", "link": "/exemplo/passo1" },
  //   { "id": 2, "titulo": "2) Identificação", "link": "/exemplo/passo2" },
  //   { "id": 3, "titulo": "3) Documentos", "link": "/exemplo/passo3","atual": "atual" },
  // ]

  return(
    <>
      <HeaderForm>
        <Title>Cadastrar funcionário</Title>
        <SubTitle>Funcionário da escola</SubTitle>
        {/* <Tabs tabs={tabs} /> */}
      </HeaderForm>

      <Form>
        
        <FormGroup>
          <FormItem>
            <Label htmlFor="nome">Nome:</Label>
            <Input placeholder="Ex.: Maria Oliveira" id="nome" />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="nome">Nome:</Label>
            <Input placeholder="Ex.: Maria Oliveira" id="nome" />
          </FormItem>
          <FormItem>
            <Label htmlFor="pai">Nome do pai:</Label>
            <Input placeholder="Ex.: Joséda Silva" id="pai" />
          </FormItem>
          <FormItem>
            <Label htmlFor="mae">Nome da mãe:</Label>
            <Input placeholder="Ex.: Maria Oliveira" id="mae" />
          </FormItem>
          <FormItem>
            <Label htmlFor="nome">Nome:</Label>
            <Input placeholder="Ex.: Maria Oliveira" id="nome" />
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
              <Button>Salvar</Button>
            </Link>
            <Link to="/exemplo/passo2">
              <Button secondary>Anterior</Button>
            </Link>
          </FormItem>
        </FormGroup>

      </Form>
    </>
  )
}

export default FormularioPasso3
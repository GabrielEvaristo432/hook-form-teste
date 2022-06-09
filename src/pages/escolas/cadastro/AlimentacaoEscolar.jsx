import { Link } from "react-router-dom"
import Title from "../../../components/Title"
import SubTitle from "../../../components/SubTitle"
import HeaderForm from "../../../components/HeaderForm"
import Form from "../../../components/Forms/Form"
import FormGroup from "../../../components/Forms/FormGroup"
import FormItem from "../../../components/Forms/FormItem"
import Label from "../../../components/Forms/Label"
import Select from "../../../components/Forms/Select"
import Option from "../../../components/Forms/Option"
import Button from "../../../components/Forms/Button"
import Tabs from "../../../components/Tabs"
import { useState } from "react"

function AlimentacaoEscolar () {
  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/identificacao" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/contato" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/outras-informacoes" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/infraestrutura" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/equipamentos" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/recursos-humanos" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/alimentacao-escolar", "atual": "atual" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/organizacao-escolar" }
  ]
  
  const[alimentacaoAlunos, setAlimentacaoAlunos] = useState(Boolean)

  return(
    <>
      <HeaderForm>
        <Title>Cadastrar escola</Title>
        <SubTitle>Escola</SubTitle>
        <Tabs tabs={tabs} />
      </HeaderForm>

      <Form>
        <FormGroup>
          <FormItem>
            <Label htmlFor="alimentacaoAlunos">
              Alimentação escolar para os alunos
            </Label>
            <Select 
              id="alimentacaoAlunos"
              value={alimentacaoAlunos}
              onChange={e => {
                setAlimentacaoAlunos(e.target.value)
              }}
            >
              <Option value={true}>Sim</Option>
              <Option value={false}>Não</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/escolas/organizacao-escolar">
              <Button>Avançar</Button>
            </Link>
            <Link to="/escolas/recursos-humanos">
              <Button
                style={{
                  backgroundColor:"white",
                  color: "#318BBA"
                }}
              >
                Voltar
              </Button>
            </Link>
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
}

export default AlimentacaoEscolar;
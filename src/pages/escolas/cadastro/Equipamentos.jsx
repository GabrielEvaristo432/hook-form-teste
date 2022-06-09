import { Link } from "react-router-dom"
import Title from "../../../components/Title"
import SubTitle from "../../../components/SubTitle"
import HeaderForm from "../../../components/HeaderForm"
import Form from "../../../components/Forms/Form"
import FormGroup from "../../../components/Forms/FormGroup"
import FormItem from "../../../components/Forms/FormItem"
import Label from "../../../components/Forms/Label"
import Input from "../../../components/Forms/Input"
import Select from "../../../components/Forms/Select"
import Option from "../../../components/Forms/Option"
import Button from "../../../components/Forms/Button"
import Tabs from "../../../components/Tabs"
import { useState } from "react"
import Checkbox from "../../../components/Forms/Checkbox"

function Equipamentos() {
  
  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/identificacao" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/contato" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/outras-informacoes" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/infraestrutura" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/equipamentos", "atual": "atual" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/recursos-humanos" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/alimentacao-escolar" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/organizacao-escolar" }
  ]
  
  const[equipamentosExistentes, setEquipamentosExistentes] = useState([])
  const[quantidadeEquipamentos, setQuantidadeEquipamentos] = useState([])
  const[quantidadeComputadores, setQuantidadeComputadores] = useState([])
  const[acessoInternet, setAcessoInternet] = useState([])
  const[equipamentosAcessoInternet, setEquipamentosAcessoInternet] = useState([])
  const[redeComputadores, setRedeComputadores] = useState([])
  const[internetBandaLarga, setInternetBandaLarga] = useState(Boolean)

  return (
    <>
      <HeaderForm>
        <Title>Cadastrar escola</Title>
        <SubTitle>Escola</SubTitle>
        <Tabs tabs={tabs} />
      </HeaderForm>

      <Form>
        <FormGroup>
          <FormItem>
            <Label htmlFor="equipamentosExistentes">
              Equipamentos existentes na escola para uso técnico e administrativo
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          {/* Coluna 1 */}
          <FormItem>
            <Checkbox
              label="Scanner"
            />

            <Checkbox
              label="Antena parabólica"
            />

            <Checkbox
              label="Computadores"
            />
          </FormItem>

          {/* Coluna 2 */}
          <FormItem>
            <Checkbox
              label="Impressora"
            />

            <Checkbox
              label="Impressora multifuncional"
            />
          </FormItem>

          {/* Coluna 3 */}
          <FormItem>
            <Checkbox
              label="Copiadora"
            />

            <Checkbox
              label="Nenhum dos equipamentos listados"
            />
          </FormItem>
        </FormGroup>

        <text 
          style={{
            marginLeft: 25,
            color: '#484946',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '17px',
            display: 'inline-block',
            width: '100%'
          }}
        >
          Quantidade de equipamentos para o processo de ensino e aprendizagem
        </text>

        <FormGroup>
          <FormItem>
            <Label 
              htmlFor="aparelho-dvd"
              style={{ fontSize: '12px' }}
            >
              Aparelho de DVD/Blu-ray
            </Label>
            <Input
              id="aparelho-dvd"
              placeholder="Número de computadores"
              style={{ width: '352px' }}
              // onChange={e => {
              //   setQuantidadeComputadores([...quantidadeComputadores, e.target.value])
              // }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="aparelho-som"
              style={{ fontSize: '12px' }}
            >
              Aparelho de som
            </Label>
            <Input
              id="aparelho-som"
              placeholder="Número de aparelhos"
              style={{ width: '352px' }}
              onChange={e => {
                
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="aparelho-televisao"
              style={{ fontSize: '12px' }}
            >
              Aparelho de televisão
            </Label>
            <Input
              id="aparelho-televisao"
              placeholder="Número de aparelhos"
              style={{ width: '352px' }}
              onChange={e => {
                
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label 
              htmlFor="lousa-digital"
              style={{ fontSize: '12px' }}
            >
              Lousa digital
            </Label>
            <Input
              id="lousa-digital"
              placeholder="Número de aparelhos"
              style={{ width: '541px' }}
              onChange={e => {
                
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="data-show"
              style={{ fontSize: '12px' }}
            >
              Projetor multimídia (Data show)
            </Label>
            <Input
              id="data-show"
              placeholder="Número de aparelhos"
              style={{ width: '541px' }}
              onChange={e => {
                
              }}
            />
          </FormItem>
        </FormGroup>

        <text 
          style={{ 
            marginLeft: 25,
            color: '#484946',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '17px',
            display: 'inline-block',
            width: '100%'
          }}
        >
          Quantidade de computadores em uso pelos alunos
        </text>

        <FormGroup>
          <FormItem>
            <Label 
              htmlFor="pc"
              style={{ fontSize: '12px' }}
            >
              Computadores de mesa (desktop)
            </Label>
            <Input
              id="pc"
              placeholder="Número de computadores"
              style={{ width: '352px' }}
              onChange={e => {
                
              }}
            />
          </FormItem>
          
          <FormItem>
            <Label 
              htmlFor="pc-portatil"
              style={{ fontSize: '12px' }}
            >
              Computadores portáteis
            </Label>
            <Input
              id="pc-portatil"
              placeholder="Número de computadores"
              style={{ width: '352px' }}
              onChange={e => {
                
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="tablets"
              style={{ fontSize: '12px' }}
            >
              Tablets
            </Label>
            <Input
              id="tablets"
              placeholder="Número de aparelhos"
              style={{ width: '352px' }}
              onChange={e => {
                
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="acessoInternet">
              Acesso à internet
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          {/* Coluna 1 */}
          <FormItem>
            <Checkbox
              label="Para uso dos alunos"
            />

            <Checkbox
              label="Para uso administrativo"
            />

            <Checkbox
              label="Para uso no processo de ensino e aprendizagem"
            />
          </FormItem>

          {/* Coluna 2 */}
          <FormItem>
            <Checkbox
              label="Para uso da comnunidade"
            />

            <Checkbox
              label="Não possui acesso á internet"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="equipamentosAcessoInternet">
              Equipamentos que os alunos usam para acessar a internet da escola
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Computadores de mesa, portáteis e tablets da escola (laboratório de informática, biblioteca, sala de aula etc.)"
            />

            <Checkbox
              label="Dispositivos pessoais (computadores portáteis, celulares, tablets etc.)"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="RedeComputadores">
              Rede local de interligação de computadores
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="A cabo"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Wireless"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Não há rede local interligando computadores"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="internetBandaLarga">
              Internet banda larga
            </Label>
            <Select 
              id="internetBandaLarga"
              onChange={e => {
                setInternetBandaLarga(e.target.value)
              }}
            >
              <Option value="sim">Sim</Option>
              <Option value="nao">Não</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/escolas/recursos-humanos">
              <Button>Avançar</Button>
            </Link>
            <Link to="/escolas/infraestrutura">
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

export default Equipamentos;
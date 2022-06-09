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
import Checkbox from "../../../components/Forms/Checkbox"
import Tabs from "../../../components/Tabs"
import { useState } from "react"

function OutrasInformacoes(){

  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/identificacao" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/contato" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/outras-informacoes", "atual": "atual" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/infraestrutura" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/equipamento" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/recursos-humanos" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/alimentacao-escolar" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/organizacao-escolar" }
  ]

  const[codigoRegional, setCodigoRegional] = useState()
  const[nomeRegional, setNomeRegional] = useState("")
  const[dependenciaAdministrativa, setDependenciaAdministrativa] = useState("")
  const[orgaoVinculado, setOrgaoVinculado] = useState([])
  const[conveniadaPoderPublico, setConveniadaPoderPublico] = useState("")
  const[regulamentacao, setRegulamentacao] = useState("")
  const[esferaAdmnistrativaConselho, setEsferaAdmnistrativaConselho] = useState("")
  const[unidadeVinculadaEscola, setUnidadeVinculadaEscola]= useState("")
  const[codigoEscolaSede, setCodigoEscolaSede] = useState("")
  const[codigoInstituicaoSuperior, setCodigoInstituicaoSuperior] = useState("")

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
            <Label htmlFor="codigoRegional">
              Código do órgão regional de ensino
            </Label>
            <Input
              id="codigoRegional"
              placeholder="Ex: 21121"
              value={codigoRegional}
              // style={{ width: '352px' }}
              onChange={e => {
                setCodigoRegional(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="nomeRegional">
              Nome do órgão regional de ensino
            </Label>
            <Input
              id="nomeRegional"
              placeholder="Ex.: nome do órgão regional de ensino"
              value={nomeRegional}
              // style={{ width: '738px' }}
              onChange={e => {
                setNomeRegional(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="dependenciaAdministrativa">
              Dependência administrativa
            </Label>
            <Select 
              id="dependenciaAdministrativa" 
              // style={{ width: '352px' }}
              value={dependenciaAdministrativa}
              onChange={e => {
                setDependenciaAdministrativa(e.target.value)
              }}
            >
              <Option value="federal">Federal</Option>
              <Option value="estadual">Estadual</Option>
              <Option value="municipal">Municipal</Option>
              <Option value="privada">Privada</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <text
              style={{
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '17px',
                color: '#474745'
              }}
            >
              Órgão a que a escola pública está vinculada
            </text>
            <text
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '11px',
                lineHeight: '13.31px',
                color: '#474745',
                marginLeft: 2
              }}
            >
              *assinalar mais de uma opção, se for o caso
            </text>
          </FormItem>
        </FormGroup>
        
        <FormGroup
          style={{
            marginTop: 0
          }}
        >
        {orgaoVinculado}
          <FormItem>
            <Checkbox
              label="Secretaria de Educação / Ministério da Educação"
              value={orgaoVinculado}
              // onClick={() => {
              //   setOrgaoVinculado([...orgaoVinculado, "Secretaria de Educação / Ministério da Educação"])
              // }}
              // onClick={(checked) => {
              //   if (checked === true){
              //     setOrgaoVinculado([...orgaoVinculado, "Secretaria de Educação / Ministério da Educação"])
              //   }
              // }}
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Secretaria de Segurança Pública / Forças Armadas/Militar"
              // value={orgaoVinculado}
              onClick={() => {
                setOrgaoVinculado([...orgaoVinculado, "Secretaria de Segurança Pública / Forças Armadas/Militar"])
              }}
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Secretaria de Saúde / Ministério da Saúde"
              // value={orgaoVinculado}
              onClick={() => {
                setOrgaoVinculado([...orgaoVinculado, "Secretaria de Saúde / Ministério da Saúde"])
              }}
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Outro órgão da administração pública"
              // value={orgaoVinculado}
              onClick={() => {
                setOrgaoVinculado([...orgaoVinculado, "Outro órgão da administração pública"])
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="conveniadaPoderPublico">
              Conveniada com o poder público
            </Label>
            <Select
              id="conveniadaPoderPublico"
              value={conveniadaPoderPublico}
              onChange={e => {
                setConveniadaPoderPublico(e.target.value)
              }}
            >
              <Option value="semConvenio">Não tem convênio</Option>
              <Option value="estadual">Estadual</Option>
              <Option value="municipal">Municipal</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="regulamentacao">
              Regulamentação/autorização no conselho ou órgão municipal, estadual ou federal de educação
            </Label>
            <Select 
              id="regulamentacao"
              value={regulamentacao}
              onChange={e => {
                setRegulamentacao(e.target.value)
              }}
            >
              <Option value="sim">Sim</Option>
              <Option value="emTramitacao">Em tramitação</Option>
              <Option value="nao">Não</Option>
            </Select>
          </FormItem>
        </FormGroup>            
        
        <FormGroup>
          <FormItem>
            <Label htmlFor="esferaAdmnistrativaConselho">
              Esfera administrativa do conselho ou órgão responsável pela regulamentação/autorização
            </Label>
            <Select 
              id="esferaAdmnistrativaConselho"
              value={esferaAdmnistrativaConselho}
              onChange={e => {
                setEsferaAdmnistrativaConselho(e.target.value)
              }}
            >
              <Option value="federal">Federal</Option>
              <Option value="estadual">Estadual</Option>
              <Option value="municipal">Municipal</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="unidadeVinculadaEscola">
              Unidade vinculada à escola de educação básica ou unidade ofertante de educação superior
            </Label>
            <Select 
              id="unidadeVinculadaEscola"
              value={unidadeVinculadaEscola}
              onChange={e => {
                setUnidadeVinculadaEscola(e.target.value)
              }}
            >
              <Option value="semVinculo">Sem vínculo com outra instituição</Option>
              <Option value="educacaoBasica">Unidade vinculada à escola de educação básica</Option>
              <Option value="ensinoSuperior">Unidade ofertante de educação superior</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="codigoEscolaSede">Código da escola sede</Label>
            <Input
              id="codigoEscolaSede"
              value={codigoEscolaSede}
              placeholder="**-*****-*"
              style={{
                backgroundColor: '#E8EAEE',
                width: '541px'
              }}
              onChange={e => {
                setCodigoEscolaSede(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="codigoInstituicaoSuperior">
              Código da instituição de educação superior (IES)
            </Label>
            <Input
              id="codigoInstituicaoSuperior"
              value={codigoInstituicaoSuperior}
              placeholder="**************"
              style={{
                backgroundColor: '#E8EAEE',
                width: '541px'
              }}
              onChange={e => {
                setCodigoInstituicaoSuperior(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/escolas/infraestrutura">
              <Button
              
              >
                Avançar
              </Button>
            </Link>
            <Link to="/escolas/contato">
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
  )
}

export default OutrasInformacoes
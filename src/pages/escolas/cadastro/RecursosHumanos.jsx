import { Link } from "react-router-dom"
import Title from "../../../components/Title"
import SubTitle from "../../../components/SubTitle"
import HeaderForm from "../../../components/HeaderForm"
import Form from "../../../components/Forms/Form"
import FormGroup from "../../../components/Forms/FormGroup"
import FormItem from "../../../components/Forms/FormItem"
import Label from "../../../components/Forms/Label"
import Input from "../../../components/Forms/Input"
import Button from "../../../components/Forms/Button"
import Tabs from "../../../components/Tabs"
import { useState } from "react"

function RecursosHumanos () {
  
  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/identificacao" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/contato" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/outras-informacoes" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/cadastro/infraestrutura" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/equipamentos" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/recursos-humanos", "atual": "atual" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/alimentacao-escolar" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/organizacao-escolar" }
  ]

  const[totalAuxiliarSecre, setTotalAuxiliarSecre] = useState()
  const[totalAuxiliarServe, setTotalAuxiliarServe] = useState()
  const[bibliotecario, setBibliotecario] = useState()
  const[bombeiro, setBombeiro] = useState()
  const[cordenadorTurno, setCordenadorTurno] = useState()
  const[fonoaudiologo, setFonoaudiologo] = useState()
  const[nutricionista, setNutricionista] = useState()
  const[assistenteSocial, setAssistenteSocial] = useState()
  const[psicologoEscolar, setPsicologoEscolar] = useState()
  const[profissionaisCozinhas, setProfissionaisCozinhas] = useState()
  const[profissionaisSupervisaoPedagogica, setProfissionaisSupervisaoPedagogica] = useState()
  const[secretarioEscolar, setSecretarioEscolar] = useState()
  const[seguranca, setSeguranca] = useState()
  const[tecnicoLaboratorio, setTecnicoLaboratorio] = useState()
  const[viceDiretor, setViceDiretor] = useState()
  const[funcionariosNaoListados, setFuncionariosNaoListados] = useState()

  return(
    <>
      <HeaderForm>
        <Title>Cadastrar escola</Title>
        <SubTitle>Escola</SubTitle>
        <Tabs tabs={tabs} />
      </HeaderForm>

      <Form>
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
          Total de profissionais que atuam nas seguintes funções na escola
        </text>
        
        <FormGroup>
          <FormItem>
            <Label 
              htmlFor="TotalAuxiliarSecre"
              style={{ 
                width: '324px', 
                fontSize: '12px' 
              }}
            >
              Auxiliares de secretaria ou auxiliares administrativos, atendentes
            </Label>
            <Input
              id="TotalAuxiliarSecre"
              placeholder="Número de funcionários"
              value={totalAuxiliarSecre}
              // style={{ width: '352px' }}
              onChange={e => {
                setTotalAuxiliarSecre(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="totalAuxiliarServe"
              style={{ 
                width: '307px', 
                fontSize: '12px' 
              }}
            >
              Auxiliar de serviços gerais, porteiro(a), zelador(a), faxineiro(a), horticultor(a), jardineiro(a)
            </Label>
            <Input
              id="totalAuxiliarServe"
              placeholder="Número de funcionários"
              value={totalAuxiliarServe}
              // style={{ width: '352px' }}
              onChange={e => {
                setTotalAuxiliarServe(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="bibliotecario"
              style={{ 
                width: '310px', 
                fontSize: '12px' 
              }}
            >
              Bibliotecário(a), auxiliar de biblioteca ou monitor(a) da sala de leitura
            </Label>
            <Input
              id="bibliotecario"
              placeholder="Número de funcionários"
              value={bibliotecario}
              // style={{ width: '352px' }}
              onChange={e => {
                setBibliotecario(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label 
              htmlFor="bombeiro"
              style={{ 
                width: '326px', 
                fontSize: '12px' 
              }}
            >
              Bombeiro(a) brigadista, profissionais de assistência a saúde (urgência e emergência), enfermeiro(a), técnico(a) de enfermagem e socorrista
            </Label>
            <Input
              id="bombeiro"
              placeholder="Número de funcionários"
              value={bombeiro}
              // style={{ width: '352px' }}
              onChange={e => {
                setBombeiro(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="cordenadorTurno"
              style={{ 
                width: '210px',
                fontSize: '12px' 
              }}
            >
              Coordenador(a) de turno/disciplinar
            </Label>
            <Input
              id="cordenadorTurno"
              placeholder="Número de funcionários"
              value={cordenadorTurno}
              // style={{ width: '352px' }}
              onChange={e => {
                setCordenadorTurno(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="fonoaudiologo"
              style={{ 
                width: '103', 
                fontSize: '12px' 
              }}
            >
              Fonoaudiólogo(a)
            </Label>
            <Input
              id="fonoaudiologo"
              placeholder="Número de funcionários"
              value={fonoaudiologo}
              // style={{ width: '352px' }}
              onChange={e => {
                setFonoaudiologo(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="nutricionista">
              Nutricionista
            </Label>
            <Input
              id="nutricionista"
              placeholder="Número de funcionários"
              value={nutricionista}
              onChange={e => {
                setNutricionista(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="assistenteSocial">
              Orientador(a) comunitário(a) ou assistente social
            </Label>
            <Input
              id="assistenteSocial"
              placeholder="Número de funcionários"
              value={assistenteSocial}
              onChange={e => {
                setAssistenteSocial(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="psicologoEscolar">
              Psicólogo(a) escolar
            </Label>
            <Input
              id="psicologoEscolar"
              placeholder="Número de funcionários"
              value={psicologoEscolar}
              onChange={e => {
                setPsicologoEscolar(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label 
              htmlFor="profissionaisCozinhas"
              style={{ width: '312px' }}
            >
              Profissionais de preparação e segurança alimentar, cozinheiro(a), merendeira e auxiliar de cozinha
              </Label>
            <Input
              id="profissionaisCozinhas"
              placeholder="Número de funcionários"
              value={profissionaisCozinhas}
              onChange={e => {
                setProfissionaisCozinhas(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="profissionaisSupervisaoPedagogica"
              style={{ width: '352px' }}
            >
              Profissionais de apoio e supervisão pedagógica: pedagogo(a), coordenador(a) pedagógico(a), orientador(a) educacional, supervisor(a) escolar e coordenador(a) de área de ensino
            </Label>
            <Input
              id="profissionaisSupervisaoPedagogica"
              placeholder="Número de funcionários"
              value={profissionaisSupervisaoPedagogica}
              
              onChange={e => {
                setProfissionaisSupervisaoPedagogica(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="secretarioEscolar">
              Secretário(a) escolar
            </Label>
            <Input
              id="secretarioEscolar"
              placeholder="Número de funcionários"
              value={secretarioEscolar}
              onChange={e => {
                setSecretarioEscolar(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label 
              htmlFor="seguranca"
              style={{ width: '260px' }}
            >
              Segurança, guarda ou segurança patrimonial
            </Label>
            <Input
              id="seguranca"
              placeholder="Número de funcionários"
              value={seguranca}
              onChange={e => {
                setSeguranca(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="tecnicoLaboratorio"
              style={{ width: '352px' }}
            >
              Técnicos(as), monitores(as), supervisores(as) ou auxiliares de laboratório(s), de apoio a tecnologias educacionais ou em multimeios/multimídias eletrônico-digitais.
            </Label>
            <Input
              id="tecnicoLaboratorio"
              placeholder="Número de funcionários"
              value={tecnicoLaboratorio}
              onChange={e => {
                setTecnicoLaboratorio(e.target.value)
              }}
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="viceDieretor">
              Vice-diretor(a) ou diretor(a) adjunto(a), profissionais  responsáveis pela gestão administrativa e/ou financeira
            </Label>
            <Input
              id="viceDiretor"
              placeholder="Número de funcionários"
              value={viceDiretor}
              onChange={e => {
                setViceDiretor(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="funcionariosNaoListados">
              Não há funcionários para as funções listadas
            </Label>
            <Input
              id="funcionariosNaoListados"
              placeholder="Número de funcionários"
              style={{ width: '352px' }}
              value={funcionariosNaoListados}
              onChange={e => {
                setFuncionariosNaoListados(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/escolas/alimentacao-escolar">
              <Button>Avançar</Button>
            </Link>
            <Link to="/escolas/equipamentos">
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

export default RecursosHumanos; 
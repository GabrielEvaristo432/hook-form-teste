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
import Checkbox from "../../../components/Forms/Checkbox"
import { useState } from "react"

function OrganizacaoEscolar() {

  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/cadastro" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/cadastro/contato" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/cadastro/outras-informacoes" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/cadastro/caracterizacao-e-infraestrutura" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/cadastro/equipamentos" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/cadastro/recursos-humanos" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/cadastro/alimentacao-escolar" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/cadastro/organizacao-escolar", "atual": "atual" }
  ]

  const [formasOrganizacao, setFormasOrganizacao] = useState([])
  const [instrumentosPedagogicos, setInstrumentosPedagogicos] = useState([])
  const [educacaoIndigena, setEducacaoIndignea] = useState(Boolean)
  const [linguaUtilizada, setLinguaUtilizada] = useState("")
  const [codigoLingua, setCodigoLingua] = useState([])
  const [exameSelecao, setExameSelecao] = useState(Boolean)
  const [ReservaVagasCotas, setReservaVagasCotas] = useState([])
  const [possuiSite, setPossuiSite] = useState(Boolean)
  const [compartilhaEspacoComunidade, setCompartilhaEspacoComunidade] = useState(Boolean)
  const [espacoEntornoEscolar, setEspacoEntornoEscolar] = useState(Boolean)

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
            <Label htmlFor="formasOrganizacao">
              Formas de organização do ensino (assinalar mais de uma opção, se for o caso)
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Série/Ano (séries anuais)"
            />

            <Checkbox
              label="Períodos semestrais"
            />

            <Checkbox
              label="Ciclo(s) do ensino fundamental"
            />
          </FormItem>
          
          <FormItem>
            <Checkbox
              label="Módulos"
            />

            <Checkbox
              label="Grupos não seriados com base na idade ou competência (art. 23 LDB)"
            />

            <Checkbox
              label="Alternância regular de períodos de estudos (proposta pedagógica de formação por alternância: tempo-escola e tempo-comunidade)"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="instrumentosPedagogicos">
              Instrumentos, materiais socioculturais e/ou pedagógicos em uso na escola para o desenvolvimento de atividades de ensino aprendizagem
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Acervo multimídia"
            />

            <Checkbox
              label="Brinquedos para educação infantil"
            />

            <Checkbox
              label="Conjunto de materiais científicos"
            />

            <Checkbox
              label="Equipamento para amplificação e difusão de som/áudio"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Instrumentos musicais para conjunto, banda/fanfarra e/ou aulas de música"
            />

            <Checkbox
              label="Jogos educativos"
            />

            <Checkbox
              label="Materiais para atividades culturais e artísticas"
            />

            <Checkbox
              label="Materiais para prática desportiva e recreação"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Materiais pedagógicos para a educação escolar indígena"
            />

            <Checkbox
              label="Materiais pedagógicos para a educação das relações étnico-raciais"
            />

            <Checkbox
              label="Materiais pedagógicos para a educação do campo"
            />

            <Checkbox
              label="Nenhum dos instrumentos listados"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="educacaoIndigena">
              Educação escolar indígena
            </Label>
            <Select
              id="educacaoIndigena"
              value={educacaoIndigena}
              onChange={e => {
                setEducacaoIndignea(e.target.value)
              }}
            >
              <Option value={true}>Sim</Option>
              <Option value={false}>Não</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="linguaUtilizada">
              Língua em que o ensino é ministrado (apenas para escola indígena)
            </Label>
            <Select
              id="linguaUtilizada"
              value={linguaUtilizada}
              onChange={e => {
                setLinguaUtilizada(e.target.value)
              }}
            >
              <Option value="portugues">Língua Portuguesa</Option>
              <Option value="indigena">Língua Indígena</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label
              htmlFor="codigoLingua"
              style={{ fontSize: '12px' }}
            >
              Códigos de Língua Indígena (até 3 línguas)
            </Label>
            <Input
              id="codigosLingua"
              placeholder="***"
              value={codigoLingua}
              style={{ backgroundColor: '#E5E5E5' }}
              onChange={e => {
                setCodigoLingua(e.target.value)
              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Button
              style={{
                border: 0,
                color: '#8F8D99',
                backgroundColor: '#F7F6F9',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '15px',
                marginLeft: 0,
                padding: 0
              }}
            >
              + Adicionar língua
            </Button>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="exameSelecao">
              A escola faz exame de seleção para ingresso de seus alunos (avaliação por prova e/ou análise curricular)
            </Label>
            <Select
              id="exameSelecao"
              value={exameSelecao}
              onChange={e => {
                setExameSelecao(e.target.value)
              }}
            >
              <Option value={true}>Sim</Option>
              <Option value={false}>Não</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="ReservaVagasCotas">
              Reserva de vagas por sistema de cotas para grupos específicos de alunos
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Autodeclarado preto, pardo ou indígena (PPI)"
            />

            <Checkbox
              label="Condição de renda"
            />

            <Checkbox
              label="Oriundo de escola pública"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Pessoa com deficiência (PCD)"
            />

            <Checkbox
              label="Outros grupos que não os listados"
            />

            <Checkbox
              label="Sem reservas de vagas para sistema de cotas (ampla concorrência)"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label
              htmlFor="possuiSite"
              style={{ width: '270px' }}
            >
              A escola possui site ou blog ou página em redes sociais para comunicação institucional
            </Label>
            <Select
              id="possuiSite"
              value={possuiSite}
              // style={{ width: '352px' }}
              onChange={e => {
                setPossuiSite(e.target.value)
              }}
            >
              <Option value={true}>Sim</Option>
              <Option value={false}>Não</Option>
            </Select>
          </FormItem>

          <FormItem>
            <Label
              htmlFor="compartilhaEspacoComunidade"
              style={{ width: '300px' }}
            >
              A escola compartilha espaços para atividades de integração escola-comunidade
            </Label>
            <Select
              id="compartilhaEspacoComunidade"
              value={compartilhaEspacoComunidade}
              // sx={{ width: '352px' }}
              onChange={e => {
                setCompartilhaEspacoComunidade(e.target.value)
              }}
            >
              <Option value={true}>Sim</Option>
              <Option value={false}>Não</Option>
            </Select>
          </FormItem>

          <FormItem>
            <Label
              htmlFor="espacoEntornoEscolar"
              style={{ width: '300px' }}
            >
              A escola usa espaços e equipamentos do entorno escolar para atividades regulares com os alunos
            </Label>
            <Select
              id="espacoEntornoEscolar"
              // sx={{ width: '352px' }}
              onChange={e => {
                setEspacoEntornoEscolar(e.target.value)
              }}
            >
              <Option value={true}>Sim</Option>
              <Option value={false}>Não</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/escolas">
              <Button>Cadastrar</Button>
            </Link>
            <Link to="/escolas/alimentacao-escolar">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#318BBA"
                }}
              >Voltar</Button>
            </Link>
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
}

export default OrganizacaoEscolar;
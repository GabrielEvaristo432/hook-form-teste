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

function CaracterizacaoeInfraestrutura() {
  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/identificacao" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/contato" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/outras-informacoes" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/infraestrutura", "atual": "atual" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/equipamento" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/recursos-humanos" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/alimentacao-escolar" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/organizacao-escolar" }
  ]

  const [localFuncionamento, setLocalFuncionamento] = useState([])
  const [formaOcupacao, setFormaOcupacao] = useState("")
  const [predioCompartilhado, setPredioCompartilhado] = useState("")
  const [codigoEscolaCompartilhada, setCodigoEscolaCompartilhada] = useState([])
  const [forneceAguaPotavel, setForneceAguaPotavel] = useState("")
  const [abastecimentoAgua, setAbastecimentoAgua] = useState([])
  const [fonteEnergia, setFonteEnergia] = useState([])
  const [esgotamentoSanitario, setEsgotamentoSanitario] = useState([])
  const [destinacaoLixo, setDestinacaoLixo] = useState([])
  const [tratamentoLixo, setTratamentoLixo] = useState([])
  const [dependenciaFisica, setDependenciaFisica] = useState([])
  const [recursoAcessibilidade, setRecursoAcessibilidade] = useState("")
  const [numeroSalasUtilizadas, setNumeroSalasUtilizadas] = useState("")
  const [condicaoSalasUtilizadas, setCondicaoSalasUtilizadas] = useState("")

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
            <Label>
              Local de funcionamento da escola
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
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Prédio escolar"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Sala(s) em outra escola"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Galpão/rancho/paiol/barracão"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Unidade de atendimento socioeducativo"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Unidade prisional"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Outros"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="formaOcupacao">
              Forma de ocupação do prédio escolar
            </Label>
            <Select
              id="formaOcupacao"
              value={formaOcupacao}
              // style={{ width: '352px' }}
              onChange={e => {
                setFormaOcupacao(e.target.value)
              }}
            >
              <Option value="proprio">Próprio</Option>
              <Option value="alugado">Alugado</Option>
              <Option value="cedido">Cedido</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="predioCompartilhado">
              Prédio escolar compartilhado com outra escola
            </Label>
            <Select
              id="predioCompartilhado"
              onChange={e => {
                setPredioCompartilhado(e.target.value)
              }}
            >
              <Option value="sim">Sim</Option>
              <Option value="nao">Não</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="codigoEscolaCompartilhada">
              Código da escola
            </Label>
            <Input
              id="codigoEscolaCompartilhada"
              placeholder="**-*****-*"
              style={{ backgroundColor: '#E8EAEE' }}
              onChange={e => {
                setCodigoEscolaCompartilhada(e.target.value)
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
              + Adicionar escola
            </Button>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="fornece-agua">
              Fornece água potável para o consumo humano
            </Label>
            <Select
              id="fornece-agua"
              // style={{ width: '541px' }}
              onChange={e => {
                setForneceAguaPotavel(e.target.value)
              }}
            >
              <Option value="Sim">Sim</Option>
              <Option value="Não">Não</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="abastecimento-agua">
              Abastecimento de água
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
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Rede pública"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Poço artesiano"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Cacimba/cisterna/poço"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Fonte/rio/igarapé/riacho/córrego"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Não há abastecimento de água"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="fonteEnergia">
              Fonte de energia elétrica
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
            </Label>
          </FormItem>          
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Rede pública"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Gerador movido a combustível fóssil"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Fontes de energia renováveis ou alternativas (gerador eólico, solar, outras)"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Não há energia elétrica"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="esgotamentoSanitario">
              Esgotamento sanitário
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
            </Label>
          </FormItem>   
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Rede pública"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Fossa séptica"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Fossa rudimentar/comum"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Não há esgotamento sanitário"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="destinacaoLixo">
              Destinação do lixo
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
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Serviço de coleta"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Queima"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Enterra"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Leva a uma destinação final licenciada pelo poder público"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Descarta em outra área"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="tratamentoLixo">
              Tratamento do lixo/resíduos que a escola realiza
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
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Checkbox
              label="Separação do lixo/resíduos"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Reaproveitamento/reutilização"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Reciclagem"
            />
          </FormItem>

          <FormItem>
            <Checkbox
              label="Não faz tratamento"
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="dependenciasFisicas">
              Dependências físicas existentes na escola
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          {/* Coluna da direita */}
          <FormItem>
            <Checkbox
              label="Almoxarifado"
            />

            <Checkbox
              label="Biblioteca"
            />

            <Checkbox
              label="Banheiro"
            />

            <Checkbox
              label="Banheiro adequado à educação infantil"
            />

            <Checkbox
              label="Auditório"
            />

            <Checkbox
              label="Área verde"
            />

            <Checkbox
              label="Cozinha"
            />

            <Checkbox
              label="Despensa"
            />

            <Checkbox
              label="Banheiro acessível, adequado ao uso de pessoas com deficiência ou mobilidade reduzida"
            />

            <Checkbox
              label="Banheiro ou vestiário com chuveiro"
            />

            <Checkbox
              label="Dormitório de aluno(a)"
            />

            <Checkbox
              label="Laboratório de informática"
            />

            <Checkbox
              label="Pátio coberto"
            />

            <Checkbox
              label="Pátio descoberto"
            />

            <Checkbox
              label="Parque infantil"
            />

            <Checkbox
              label="Dormitório de professor(a)"
            />

            <Checkbox
              label="Laboratório de ciências"
            />
          </FormItem>

          {/* Coluna da esquerda */}
          <FormItem>
            <Checkbox
              label="Piscina"
            />

            <Checkbox
              label="Quadra de esporte coberta"
            />

            <Checkbox
              label="Refeitório"
            />

            <Checkbox
              label="Sala/ateliê de artes"
            />

            <Checkbox
              label="Sala de música/coral"
            />

            <Checkbox
              label="Sala/estúdio de dança"
            />

            <Checkbox
              label="Sala multiuso (música, dança e artes)"
            />

            <Checkbox
              label="Sala de diretoria"
            />

            <Checkbox
              label="Sala de leitura"
            />

            <Checkbox
              label="Sala de professores"
            />

            <Checkbox
              label="Saça de repouso para aluno(a)"
            />

            <Checkbox
              label="Sala de secretaria"
            />

            <Checkbox
              label="Sala de recursos multifuncionais para Atendimento Educacional Especializado (AEE)"
            />

            <Checkbox
              label="Terreirão (área para prática desportiva e recreação sem cobertura, sem piso e sem edificações)"
            />

            <Checkbox
              label="Viveiro/criação de animais"
            />

            <Checkbox
              label="Nenhuma das dependências relacionadas"
            />
          </FormItem>
        </FormGroup>

        {/* FORMATAÇÃO */}

        <FormGroup>
          <FormItem>
            <Label htmlFor="acessibilidade">
              Recursos de acessibilidade para pessoas com deficiência ou mobilidade reduzida nas vias de circulação internas da escola
            </Label>
          </FormItem>
        </FormGroup>

        <FormGroup>
          {/* Coluna 1 */}
          <FormItem>
            <Checkbox
              label="Corrimão e guarda-corpos"
            />

            <Checkbox
              label="Sinalização sonora"
            />

            <Checkbox
              label="Elevador"
            />
          </FormItem>

          {/* Coluna 2 */}
          <FormItem>
            <Checkbox
              label="Sinalização tátil"
            />

            <Checkbox
              label="Pisos táteis"
            />

            <Checkbox
              label="Sinalização visual (piso/paredes)"
            />
          </FormItem>

          {/* Coluna 3 */}
          <FormItem>
            <Checkbox
              label="Portas com vão livre de no mínimo 80cm"
            />

            <Checkbox
              label="Nenhum dos recursos de acessibilidade listados"
            />

            <Checkbox
              label="Rampas"
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
          Número de salas de aula utilizadas pela escola (dentro e fora do prédio escolar)
        </text>

        <FormGroup>
          <FormItem>
            <Label
              htmlFor="salas-dentro-do-predio"
              style={{
                fontSize: '12px',
                width: '189px'
              }}
            >
              Salas dentro do prédio escolar
            </Label>
            <Input
              id="salas-dentro-do-predio"
              placeholder="Número de salas"
              style={{ width: '541px' }}
              onChange={e => {

              }}
            />
          </FormItem>

          <FormItem>
            <Label
              htmlFor="salas-fora-do-predio"
              style={{ fontSize: '12px', width: '174px' }}
            >
              Salas fora do prédio escolar
            </Label>
            <Input
              id="salas-fora-do-predio"
              placeholder="Número de salas"
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
          Condições das salas de aula utilizadas pela escola (dentro e fora do prédio escolar)
        </text>

        <FormGroup>
          <FormItem>
            <Label
              htmlFor="salas-climatizadas"
              style={{
                fontSize: '12px',
                width: '475px'
              }}
            >
              Número de salas de aula climatizadas (ar condicionado, aquecedor ou climatizador)
            </Label>
            <Input
              id="salas-climatizadas"
              placeholder="Número de salas"
              style={{ width: '541px' }}
              onChange={e => {

              }}
            />
          </FormItem>

          <FormItem>
            <Label
              htmlFor="salas-com-acessibilidade"
              style={{ fontSize: '12px', width: '541px' }}
            >
              Número de salas de aula com acessibilidade para pessoas com deficiência ou mobilidade reduzida
            </Label>
            <Input
              id="salas-com-acessibilidade"
              placeholder="Número de salas"
              style={{ width: '541px' }}
              onChange={e => {

              }}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/escolas/equipamentos">
              <Button>Avançar</Button>
            </Link>
            <Link to="/escolas/outras-informacoes">
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

export default CaracterizacaoeInfraestrutura;
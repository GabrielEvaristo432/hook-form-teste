import { Link } from "react-router-dom"
import Title from "../../components/Title"
import SubTitle from "../../components/SubTitle"
import HeaderForm from "../../components/HeaderForm"
import Mensagem from "../../components/Message"
import Form from "../../components/Forms/Form"
import FormGroup from "../../components/Forms/FormGroup"
import FormItem from "../../components/Forms/FormItem"
import Label from "../../components/Forms/Label"
import Input from "../../components/Forms/Input"
import Select from "../../components/Forms/Select"
import Option from "../../components/Forms/Option"
import Textarea from "../../components/Forms/TextArea"
import Button from "../../components/Forms/Button"
import Checkbox from "../../components/Forms/Checkbox"
import Tabs from "../../components/Tabs"

function FormularioPasso1(){

  // Informações sobre as abas
  const tabs = [
    { "id": 1, "titulo": "1) Início", "link": "/exemplo/passo1", "atual": "atual" },
    { "id": 2, "titulo": "2) Identificação", "link": "/exemplo/passo2" },
    { "id": 3, "titulo": "3) Documentos", "link": "/exemplo/passo3" },
  ]

  return(
    <>
      {/* Container que envolve o cabeçalho da página de formulário */}
      <HeaderForm>
        <Title>Cadastrar funcionário</Title>
        <SubTitle>Funcionário da escola</SubTitle>
        <Tabs tabs={tabs} />
      </HeaderForm>

      <Form>

        {/* Mensagens */}
        <Mensagem success>
          Funcionário cadastrado com sucesso!
        </Mensagem>

        <Mensagem danger>
          O campo nome não pode estar em branco!
        </Mensagem>

        <Mensagem>
          Mensagem padrão
        </Mensagem>

        <Mensagem warning>
          Atenção!
        </Mensagem>

        {/* Cada linha do formulário deve estar dentro de um FormGroup */}
        <FormGroup>
          <FormItem>
            <Checkbox label="Concorda com os termos" />
          </FormItem>
          
          <FormItem>
            <Checkbox 
              label="Quero receber as novidades" 
              checked
            />
          </FormItem>
          <FormItem>
            <Checkbox 
              label="Quero receber as novidades" 
              checked
            />
          </FormItem>
        </FormGroup>
        
        <FormGroup>
          {/* Cada conjunto input/label deve estar dentro de um FormItem */}
          <FormItem>
            <Label htmlFor="nome">Nome:</Label>
            <Input placeholder="Ex.: Maria Oliveira" id="nome" />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="cpf">CPF:</Label>
            <Input placeholder="Ex.: 788.555.434-54" id="cpf" />
          </FormItem>
          <FormItem>
            <Label htmlFor="rg">RG:</Label>
            <Input placeholder="Ex.: 794.764" id="rg" />
          </FormItem>
          <FormItem>
            <Label htmlFor="titulo">Título:</Label>
            <Input placeholder="Ex.: 95734527954" id="titulo" />
          </FormItem>
        </FormGroup>            
        
        <FormGroup>
          <FormItem>
            <Label htmlFor="endereco">Endereço:</Label>
            <Input 
              placeholder="Rua das Flores nº 109" 
              id="endereco" 
              fullWidth
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="estado">Estado:</Label>
            <Select id="estado">
              <Option value="AC">Acre</Option>
              <Option value="AM">Amazonas</Option>
              <Option value="RO">Rondônia</Option>
            </Select>
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
            <Link to="/exemplo/passo2">
              <Button>Próximo</Button>
            </Link>
          </FormItem>
        </FormGroup>

      </Form>
    </>
  )
}

export default FormularioPasso1
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import Title from "../../../components/Title"
import SubTitle from "../../../components/SubTitle"
import HeaderForm from "../../../components/HeaderForm"
import Form from "../../../components/Forms/Form"
import FormGroup from "../../../components/Forms/FormGroup"
import FormItem from "../../../components/Forms/FormItem"
import Label from "../../../components/Forms/Label"
import Input from "../../../components/Forms/Input"
import MaskInput from "../../../components/Forms/MaskInput"
import Select from "../../../components/Forms/Select"
import Option from "../../../components/Forms/Option"
import Button from "../../../components/Forms/Button"
import Tabs from "../../../components/Tabs"
import { useState } from "react"
import escolasService from "../../../services/escolas"

function Contato(){

  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/identificacao" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/contato", "atual": "atual" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/outras-informacoes" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/infraestrutura" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/equipamento" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/recursos-humanos" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/alimentacao-escolar" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/organizacao-escolar" }
  ]

  const[outrosTelefones, setOutrosTelefones] = useState([])
  const[tipos, setTipos] = useState([])
  const[outrosEmails, setOutrosEmails] = useState([])

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const rota = "contato"

  async function Cadastrar (data) {
    await escolasService.adicionar({
      telefonePrincipal: data.telefonePrincipal,
      tipoTelefonePrincipal: data.tipoTelefonePrincipal,
      emailPrincipal: data.emailPrincipal,
      outrosTelefones: [{telefone: data.telefone2, tipo: data.tipo2}, {telefone: data.telefone3, tipo: data.tipo3}],
      outrosEmails: [data.email2, data.email3]
    }, rota)
  }

  return(
    <>
      <HeaderForm>
        <Title>Cadastrar escola</Title>
        <SubTitle>Escola</SubTitle>
        <Tabs tabs={tabs} />
      </HeaderForm>

      <Form
        onSubmit={handleSubmit((e) => Cadastrar(e))}
      >        
        <FormGroup>
          {/* {console.log(emails)} */}
          {/* {console.log(telefones)} */}
          {/* {console.log(tipos)} */}
          <FormItem>
            <Label 
              htmlFor="telefone"
            >
              Contatos telefônicos *
            </Label>
            <Input
              id="telefone"
              placeholder="Ex.: (00)90000-0000"
              mask="(99)99999-9999"
              type="tel"
              style={{ width: '300px' }}
              {...register('telefonePrincipal', { required: true })}
            />
          </FormItem>

          <FormItem>
            <Label 
              htmlFor="tipos"
              style={{
                width: '110.95px'
              }}
            >
              Tipo *
            </Label>
            <Select
              id="tipos"
              {...register('tipoTelefonePrincipal', { required: true })}
            >
              <Option value="celular">Celular</Option>
              <Option value="telefone-fixo">Telefone fixo</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Input
              id="telefone"
              placeholder="Ex.: (00)90000-0000"
              mask="(99)99999-9999"
              type="tel"
              style={{ width: '300px' }}
              {...register('telefone2')}
            />
          </FormItem>

          <FormItem>
            <Select
              id="tipos"
              {...register('tipo2')}
            >
              <Option value="celular">Celular</Option>
              <Option value="telefone-fixo">Telefone fixo</Option>
            </Select>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Input
              id="telefone"
              placeholder="Ex.: (00)90000-0000"
              mask="(99)99999-9999"
              type="tel"
              style={{ width: '300px' }}
              {...register('telefone3')}
            />
          </FormItem>

          <FormItem>
            <Select
              id="tipos"
              {...register('tipo3')}
            >
              <Option value="celular">Celular</Option>
              <Option value="telefone-fixo">Telefone fixo</Option>
            </Select>
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
              // onClick={() => cadastroTelefone()}
            >
              + Adicionar telefone
            </Button>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            <Label htmlFor="email">
              E-mail *
            </Label>
            {/* {"Saída: " + email1} */}
            <Input 
              id="email"
              placeholder="seuemail@provedor.com"
              {...register('emailPrincipal', { required: true })}
            />
          </FormItem>
        </FormGroup>            
        
        <FormGroup>
          <FormItem>
            {/* {"Saída: " + email2} */}
            <Input
              id="email"
              placeholder="seuemail@provedor.com"
              {...register('email2')}
            />
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem>
            {/* {"Saída: " + email3} */}
            <Input
              id="email"
              placeholder="seuemail@provedor.com"
              {...register('email3')}
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
              + Adicionar email
            </Button>
          </FormItem>
        </FormGroup>

        <FormGroup>
          <FormItem flexd>
            <Link to="/escolas/outras-informacoes">
              <Button>Avançar</Button>
            </Link>
            <Link to="/escolas/identificacao">
              <Button
                style={{
                  backgroundColor:"white",
                  color: "#318BBA"
                }}
              >
                Voltar
              </Button>
            </Link>

            <Button 
              type="submit"
              style={{ backgroundColor: 'green' }}
            >
              Cadastrar
            </Button>
          </FormItem>
        </FormGroup>

      </Form>
    </>
  )
}

export default Contato
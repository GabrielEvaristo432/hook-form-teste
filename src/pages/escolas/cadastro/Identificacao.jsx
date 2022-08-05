import React from "react";
import { useForm } from "react-hook-form";
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
import Tab from "../../../components/Tab"
import TabContent from "../../../components/TabContent"
import TabItem from "../../../components/TabItem"
import MaskInput from "../../../components/Forms/MaskInput"
import Message from "../../../components/Message";
import { useState } from "react"
import escolasService from "../../../services/escolas"
import { Link } from "react-router-dom"

function Identificacao(){

  const [activeTab, setActiveTab] = useState("tab1")
  const handleTab = (tabName) => setActiveTab(tabName)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const[login, setLogin] = useState("")
  const[senha, setSenha] = useState("")

  const[telefone1, setTelefone1] = useState("")
  const[telefone2, setTelefone2] = useState("")
  const[telefone3, setTelefone3] = useState("")

  const rota = "identificacao"

  async function Cadastrar (data) {
    const escola = {
      login: data.login,
      senha: data.senha,
      telefonePrincipal: data.telefone1,
      outrosTelefones: [data.telefone2, data.telefone3]
    }

    await escolasService.adicionar(escola, rota)
  }

  return(
    <div>
      <HeaderForm>
        <Title>Cadastrar escola</Title>
        <SubTitle>Escola</SubTitle>
        <Tab>
          <TabItem
            onClick={() => handleTab("tab1")}
            active={activeTab === "tab1" ? "active" : ""}>
            Identificação
          </TabItem>

          <TabItem
            onClick={() => handleTab("tab2")}
            active={activeTab === "tab2" ? "active" : ""}>
            Contato
          </TabItem>

          {/* <TabItem
            onClick={() => handleTab("tab3")}
            active={activeTab === "tab3" ? "active" : ""}>
            Outras informações
          </TabItem>

          <TabItem
            onClick={() => handleTab("tab4")}
            active={activeTab === "tab4" ? "active" : ""}>
            Caracterização e infraestrutura
          </TabItem>

          <TabItem
            onClick={() => handleTab("tab5")}
            active={activeTab === "tab5" ? "active" : ""}>
            Equipamentos
          </TabItem>
          <TabItem
            onClick={() => handleTab("tab6")}
            active={activeTab === "tab6" ? "active" : ""}>
            Recursos humanos
          </TabItem>

          <TabItem
            onClick={() => handleTab("tab7")}
            active={activeTab === "tab3" ? "active" : ""}>
            Alimentação Escolar
          </TabItem>

          <TabItem
            onClick={() => handleTab("tab8")}
            active={activeTab === "tab3" ? "active" : ""}>
            Organização Escolar
          </TabItem> */}
        </Tab>
      </HeaderForm>

      <Form onSubmit={handleSubmit(data => Cadastrar(data))}>
        <TabContent showTab={activeTab === "tab1" ? "showTab" : ""}>
          <FormGroup>
            <FormItem>
              <Label>
                Login
              </Label>
              <Input
                id="login"
                placeholder="E-mail ou nome de usuário"
                {...register("login", {required: true})}
              />
            </FormItem>
          </FormGroup>

          <FormGroup>
            <FormItem>
              <Label>
                Senha
              </Label>
              <Input
                id="senha"
                placeholder="Digite aqui"
                type="password"
                {...register("senha", {required: true})}
              />
            </FormItem>
          </FormGroup>

          <FormGroup>
            <FormItem flexd>
              <Button onClick={(e) => {
                e.preventDefault()
                handleTab("tab2")
              }}>
                Avançar
              </Button>
              
              <Button onClick={(e) => {
                e.preventDefault()
                handleTab("tab1")
              }}>
                Voltar
              </Button>
            </FormItem>
          </FormGroup>
        </TabContent>
        
        <TabContent showTab={activeTab === "tab2" ? "showTab" : ""}>
          <FormGroup>
            <FormItem>
              <Label
                htmlFor="telefone"
              >
                Contatos telefônicos *
              </Label>
              <Input
                id="telefone"
                placeholder="Ex.: (00)90000-0000"
                // mask="(99)99999-9999"
                type="tel"
                style={{ width: '300px' }}
                {...register("telefone1", {required: true})}
              />
            </FormItem>
          </FormGroup>

          <FormGroup>
            <FormItem>
              <Input
                id="telefone"
                placeholder="Ex.: (00)90000-0000"
                // mask="(99)99999-9999"
                type="tel"
                style={{ width: '300px' }}
                {...register("telefone2")}
              />
            </FormItem>
          </FormGroup>

          <FormGroup>
            <FormItem>
              <Input
                id="telefone"
                placeholder="Ex.: (00)90000-0000"
                // mask="(99)99999-9999"
                type="tel"
                style={{ width: '300px' }}
                {...register("telefone3")}
              />
            </FormItem>
          </FormGroup>
        </TabContent>

        <Button type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}

export default Identificacao;
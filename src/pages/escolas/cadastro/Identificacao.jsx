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
import Select from "../../../components/Forms/Select"
import Option from "../../../components/Forms/Option"
import Button from "../../../components/Forms/Button"
import Tabs from "../../../components/Tabs"
import MaskInput from "../../../components/Forms/MaskInput"
import Message from "../../../components/Message";
import { useState } from "react"
import escolasService from "../../../services/escolas"
import axios from "axios";

function Identificacao(){

  const tabs = [
    { "id": 1, "titulo": "1) Identificação", "link": "/escolas/identificacao", "atual": "atual" },
    { "id": 2, "titulo": "2) Contato", "link": "/escolas/contato" },
    { "id": 3, "titulo": "3) Outras informações", "link": "/escolas/outras-informacoes" },
    { "id": 4, "titulo": "4) Caracterização e infraestrutura", "link": "/escolas/infraestrutura" },
    { "id": 5, "titulo": "5) Equipamentos", "link": "/escolas/equipamentos" },
    { "id": 6, "titulo": "6) Recursos Humanos", "link": "/escolas/recursos-humanos" },
    { "id": 7, "titulo": "7) Alimentação escolar - PNAE/FNDE", "link": "/escolas/alimentacao-escolar" },
    { "id": 8, "titulo": "8) Organização escolar", "link": "/escolas/organizacao-escolar" }
  ]

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const rota = "identificacao"

  async function Cadastrar (data) {
    await escolasService.adicionar(data, rota)
  }

  return(
    <div>
      <HeaderForm>
        <Title>Cadastrar escola</Title>
        <SubTitle>Escola</SubTitle>
        <Tabs tabs={tabs}  />
      </HeaderForm>

      <Form
        onSubmit={handleSubmit((e) => Cadastrar(e))}
      >

        {errors.login &&
          <Message warning>
            O campo login é obrigatório
          </Message>
        }

        {errors.senha &&
          <Message warning>
            O campo senha é obrigatório
          </Message>
        }

        <FormItem>
          <Label>Login</Label>
          <Input
            style={{ width: '300px' }}
            placeholder="E-mail ou nome de usuário"
            {...register("login", { required: true })}
          />
        </FormItem>
        
        <FormItem>
          <Label>Senha</Label>
          <Input
            style={{ width: '300px' }}
            type="password"
            placeholder="Digite sua senha"
            {...register("senha", { required: true })}
          />
        </FormItem>

        

        <Button type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}

export default Identificacao;
import Container from "../../components/Container"
import Pagination from "../../components/Pagination"
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg'
import { ReactComponent as EditIcon } from '../../assets/edit.svg'
import { ReactComponent as PrintIcon } from '../../assets/print.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'
import { Link } from "react-router-dom"
import Title from "../../components/Title"
import SubTitle from "../../components/SubTitle"
import Table from "../../components/Table"
import ContainerTable from "../../components/Table/ContainerTable"
import HeaderSearch from "../../components/HeaderSearch"

function ListarExemplo(){

  // Array com dados para paginação
  const pages = [
    { 'id': 1, 'link': '/exemplo/pagina/1' },
    { 'id': 2, 'link': '/exemplo/pagina/2', 'selected': 'selected' },
    { 'id': 3, 'link': '/exemplo/pagina/3' },
    { 'id': 4, 'link': '/exemplo/pagina/4' },
    { 'id': 5, 'link': '/exemplo/pagina/5' },
    { 'id': 6, 'link': '/exemplo/pagina/6' }
  ]

  return(
    <>
      {/* Container que envolve o cabeçalho de busca */}
      <HeaderSearch>
        {/* É um container genérico */}
        <Container>
          {/* É um H1 formatado */}
          <Title>Cadastrar funcionário</Title>
          {/* É um H2 formatado */}
          <SubTitle>Funcionário da escola</SubTitle>
        </Container>
      </HeaderSearch>
    
      {/* Container que envolve a tabela */}
      <ContainerTable>
        {/* É a mesma coisa que um <table>, mas formatado */}
        <Table>
        <thead>
            <tr>
              <th>Nome</th>
              <th>Habilidades</th>
              <th>Data de modificação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Planejamento e produção de texto</td>
              <td>EF03LP22 - Planejar e produzir...  EF04MA07 - Ler, escrever e ordenar...</td>
              <td>28/09/2021 12:45h</td>
              <td>
                <Container row spacebetween>
                  <Link to="#" title="Versão para impressão"><PrintIcon /></Link>
                  <Link to="#" title="Deletar"><ArrowRight /></Link>
                  <Link to="#" title="Alterar"><EditIcon /></Link>
                </Container>
              </td>
            </tr>
            <tr>
              <td>Planejamento e produção de texto</td>
              <td>EF03LP22 - Planejar e produzir...  EF04MA07 - Ler, escrever e ordenar...</td>
              <td>28/09/2021 12:45h</td>
              <td>
                <Container row spacebetween>
                  <Link to="#" title="Versão para impressão"><PrintIcon /></Link>
                  <Link to="#" title="Deletar"><DeleteIcon /></Link>
                  <Link to="#" title="Alterar"><EditIcon /></Link>
                </Container>
              </td>
            </tr>
            <tr>
              <td>Planejamento e produção de texto</td>
              <td>EF03LP22 - Planejar e produzir...  EF04MA07 - Ler, escrever e ordenar...</td>
              <td>28/09/2021 12:45h</td>
              <td>
                <Container row spacebetween>
                  <Link to="#" title="Versão para impressão"><PrintIcon /></Link>
                  <Link to="#" title="Deletar"><DeleteIcon /></Link>
                  <Link to="#" title="Alterar"><EditIcon /></Link>
                </Container>
              </td>
            </tr>
            <tr>
              <td>Planejamento e produção de texto</td>
              <td>EF03LP22 - Planejar e produzir...  EF04MA07 - Ler, escrever e ordenar...</td>
              <td>28/09/2021 12:45h</td>
              <td>
                <Container row spacebetween>
                  <Link to="#" title="Versão para impressão"><PrintIcon /></Link>
                  <Link to="#" title="Deletar"><DeleteIcon /></Link>
                  <Link to="#" title="Alterar"><EditIcon /></Link>
                </Container>
              </td>
            </tr>            
          </tbody>
        </Table>
      </ContainerTable>

      {/* Container genérico */}
      <Container>
        {/* Componente para paginação */}
        <Pagination pages={pages} />
      </Container>
    </>
  )
}

export default ListarExemplo
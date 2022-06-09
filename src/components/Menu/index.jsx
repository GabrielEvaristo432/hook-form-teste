import { Link } from "react-router-dom"
import styled from "styled-components"
import theme from "../../theme"
import MenuItem from "./MenuItem"
import { ReactComponent as IconHome } from "../../assets/home.svg"
import { ReactComponent as IconUsers } from "../../assets/users.svg"
import { ReactComponent as IconBook } from "../../assets/book.svg"
import { ReactComponent as IconFileText } from "../../assets/filetext.svg"
import { ReactComponent as IconUser } from "../../assets/user.svg"
import { ReactComponent as IconLogout } from "../../assets/logout.svg"

const ContainerMenu = styled.ul`
  list-style: none;
  min-width: 200px;
  font-family: ${theme.titleFont};
  font-size: ${theme.textSize};
  padding: 16px 0;
  border-right: .1em ${theme.border} solid;
`

function Menu(){

  return(
    <nav>
      <ContainerMenu>
        <MenuItem>
          <Link to="/"><IconHome />&nbsp;&nbsp;Início</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/responsaveis/cadastrar/passo1"><IconUsers />&nbsp;&nbsp;Responsaveis</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/alunos"><IconUsers />&nbsp;&nbsp;Alunos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/funcionarios"><IconUsers />&nbsp;&nbsp;Funcionários</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/escolas"><IconBook />&nbsp;&nbsp;Escolas</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/disciplinas"><IconFileText />&nbsp;&nbsp;Disciplinas</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/cursos"><IconFileText />&nbsp;&nbsp;Cursos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/turmas"><IconFileText />&nbsp;&nbsp;Turmas</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/relatorios"><IconFileText />&nbsp;&nbsp;Relatórios</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/exemplo"><IconFileText />&nbsp;&nbsp;Exemplo busca</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/exemplo/passo1"><IconFileText />&nbsp;&nbsp;Exemplo form</Link>
        </MenuItem>
      </ContainerMenu>
      <ContainerMenu>
        <MenuItem>
          <Link to="/conta"><IconUser />&nbsp;&nbsp;Conta</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sair"><IconLogout />&nbsp;&nbsp;Sair</Link>
        </MenuItem>
      </ContainerMenu>
    </nav>
  )
}

export default Menu
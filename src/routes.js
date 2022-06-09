import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import ListarAlunos from './pages/alunos/ListarAlunos'
import ListarCursos from './pages/cursos/ListarCursos'
import ListarDisciplinas from './pages/disciplinas/ListarDisciplinas'
import ListarEscolas from './pages/escolas/ListarEscolas'
import ListarFuncionarios from './pages/funcionarios/ListarFuncionarios'
import ListarHabilidades from './pages/habilidades/ListarHabilidades'
import ListarObjetosDoConhecimento from './pages/objetos-do-conhecimento/ListarObjetosDoConhecimento'
import ListarPraticasDeLinguagem from './pages/praticas-de-linguagem/ListarPraticasDeLinguagem'
import ListarResponsaveis from './pages/responsaveis/ListarResponsaveis'
import ListarTurmas from './pages/turmas/ListarTurmas'
import Identificacao from './pages/escolas/cadastro/Identificacao'
import Relatorios from "./pages/relatorios"
import Conta from "./pages/conta"
import ListarExemplo from './pages/exemplo/ListarExemplo'
import FormularioPasso1 from './pages/exemplo/FormularioPasso1'
import FormularioPasso2 from './pages/exemplo/FormularioPasso2'
import FormularioPasso3 from './pages/exemplo/FormularioPasso3'
import Header from './components/Header'
import Menu from './components/Menu'
import Container from './components/Container'
import MainContainer from './components/MainContainer'

function AppRouter(){

  return(
    <BrowserRouter>
        <Header />
        <MainContainer>
          <Menu />
          <Container>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/alunos' element={<ListarAlunos />} />
              <Route path='/cursos' element={<ListarCursos />} />
              <Route path='/disciplinas' element={<ListarDisciplinas />} />
              <Route path='/escolas' element={<ListarEscolas />} />
              <Route path='/escolas/identificacao' element={<Identificacao />} />
              <Route path='/funcionarios' element={<ListarFuncionarios />} />
              <Route path='/habilidades' element={<ListarHabilidades />} />
              <Route path='/objeto-do-conhecimento' element={<ListarObjetosDoConhecimento />} />
              <Route path='/praticas-de-linguagem' element={<ListarPraticasDeLinguagem />} />
              <Route path='/responsaveis' element={<ListarResponsaveis />} />
              <Route path='/turmas' element={<ListarTurmas />} />
              <Route path='/relatorios' element={<Relatorios />} />
              <Route path='/conta' element={<Conta />} />
              <Route path='/exemplo' element={<ListarExemplo />} />
              <Route path='/exemplo/passo1' element={<FormularioPasso1 />} />
              <Route path='/exemplo/passo2' element={<FormularioPasso2 />} />
              <Route path='/exemplo/passo3' element={<FormularioPasso3 />} />
            </Routes>
          </Container>
        </MainContainer>
    </BrowserRouter>
  )
}

export default AppRouter

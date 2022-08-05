import axios from 'axios'
import urlApi from '../../config'

async function listar () {

}

async function adicionar (escola, rota) {
  const response = await axios.post(`${urlApi}/${rota}`, escola)
  return response
}

const escolasService = {
  listar,
  adicionar
}

export default escolasService
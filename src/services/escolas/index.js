import axios from 'axios'
import urlApi from '../../config'

async function listar () {

}

async function adicionar ({telefonePrincipal, tipoTelefonePrincipal, emailPrincipal, outrosTelefones, outrosEmails}, rota) {
  const response = await axios.post(`${urlApi}/${rota}`, {telefonePrincipal, tipoTelefonePrincipal, emailPrincipal, outrosTelefones, outrosEmails})
  return response
}

const escolasService = {
  listar,
  adicionar
}

export default escolasService
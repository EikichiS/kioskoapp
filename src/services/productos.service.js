import axios from 'axios';

const API_URL = 'http://localhost:8001/productos/';

class VentaService {
  getProductos() {
    return axios.get(API_URL + 'listar');
  }
}
export default new VentaService();
import axios from 'axios';

const API_URL = 'http://localhost:8001/ventas/';

class VentaService {
  getVentas() {
    return axios.get(API_URL + 'listar');
  }
}
export default new VentaService();
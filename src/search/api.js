import axios from "axios";
//https://viacep.com.br/ws/ <nunca muda      sempre muda>01310930/json APP para consumir (teste)
const api = axios.create({
  baseURL:" viacep.com.br/ws/"
});
export default api;
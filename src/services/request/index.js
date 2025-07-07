import {api} from "../api";

export const getList = async () => {
  try {
    const resul= await api.get("/list-items");   
    return resul.data;
     
  }catch (error) {
    alert("Error ao buscar dados da API");
    return { error};
  }
};
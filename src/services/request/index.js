import {api} from "../api";

export const getList = async () => {
  try {
    const resul= await api.get("/list_items");   
    return resul.data;
     
  }catch (error) {
    alert("Error ao buscar dados da API");
    return { error};
  }
};


export const createItem = async (item) => {
  try {
    const resul= await api.post("/list_items", {
    ...item,

    });   
    return resul.data;
     
  }catch (error) {
    alert("Error ao salvar novo item");
    return { error};
  }
};

export const updateItem = async (id, item) => {
  try {
    const resul= await api.put(`/list_items/${id}`, {
    ...item,

    });   
    return resul.data;
     
  }catch (error) {
    alert("Error ao salvar novo item");
    return { error};
  }
};

export const deleteItem = async (id) => {
  try {
    const resul= await api.delete(`/list_items/${id}`);   
    return resul.data;      
  } catch (error) {
    alert("Error ao deletar item");
    return { error};
  }
};
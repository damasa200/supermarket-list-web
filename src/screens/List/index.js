import { useState, useEffect } from "react";
import "./index.css";
import { getList, updateItem } from "../../services/request";
import { ListRender } from "../../components/ListRender";
import { Loader } from "../../components/Loader";
import { Modal } from "../../components/Modal/index,";

export const ListScreen = ({onClose, item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [selectedItem, setSelectedItem]= useState(null);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  const onClickAddButton = () => {
    setSelectedItem(null);
    setModalVisible(true);
  };
  
  const onCloseModal = () =>{
    setModalVisible(false)
    loadListItems();
    setSelectedItem(null);
  };
    
   const onEditItem = (item) => { 
    setSelectedItem(item);
    setModalVisible(true);   
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id,{
      ...item,
      checked:true,
    });
    if(!result.error){
      await loadListItems();
    }
  };

  return (
    <div className="List-screen-container">
      <div className="List-screen-content-container">
        <div className="List-screen-header">
          <div className="List-screen-title-container">
            <img className="Logo-image" src="/images/logo.png" alt="Logo" />
            <h1 className="List-screen-header-title">Lista Supermercado</h1>
          </div>
          <button onClick={onClickAddButton}className="add-button">{window.innerWidth <= 420 ? "+" : "Adicionar"}</button>
        </div>

        {/* Aqui renderiza os cards */}
        <div className="List-screen-List-container">
          {loading ? <Loader /> : <ListRender onCheckItem={onCheckItem} onEdit={onEditItem} List={listData} />}
        </div>
      </div>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal}/>}
    </div>
  );
};
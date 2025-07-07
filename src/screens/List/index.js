import {useState} from 'react'
import "./index.css"
import {useEffect} from "react";
import {getList} from "../../services/request"
import React from 'react';
import {ListCard} from '../../components/ListCard'

export const ListScreen = () => {
  const[Loading, setLoading] = useState(true);
  const [ListData, setListData] = useState([])



  const loadListItems = async () => { 
    setLoading(true)
    const resul = await getList();
    console.log({ resul});
    setListData (resul);
    setLoading(false);
    
  };

  useEffect (() => {
    loadListItems ();    
  }, [] )  

  return (
    <div className="List-screen-container ">
      <div className="List-screen-content-container">
        <div className="List-screen-header">
          <img className="Logo-image" src= "images/logo.png" alt ="supermarket-list-logo"
          />
          <h1> Lista Supermercado</h1>          
        </div>


        <div className="List-screen-List-container">
          {Loading && <h3>Carregando...</h3>}


          {!Loading && ListData?.length > 0 ? ListData.map(item => <ListCard key={item._id} item={item}/>): <h3>Sua Lista está vazia,
              adicione um novo item cliecando no botão de adicionar            
            </h3>
          }

        </div>
      </div>      
    </div>
  )  
};
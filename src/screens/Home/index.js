/* Index.js da pasta Home que está dentro da pasta screens */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { SAVE_USERNAME_PATH } from "../../services/constants"

const HomeScreen = () => {
  const navigate = useNavigate()
  const [username,setUsername] = useState("");

  const onClickContinue = () => {
    if (username.length < 3) {
      alert("Username deve conter mais do que 3 caracteres!");
      return;
      
    }

    localStorage.setItem("SAVE_USERNAME_PATH", username);
    navigate("/list");
  };
  
  

  return (
    <div className="home-screen-container">
      <div className='home-screen-content-container '>
        <img className='shopping-bag-image' src="/images/shopping-bag.png"
         alt="shopping-bag" ></img>
        <h1 className='home-screen-title'>
          Sua Lista de supermercado mais fácil do que nunca.</h1>

        <h3 className='home-sub-title'>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>

        <h3 className='home-screen-subitle-description '>
          Digite abaixo seu usuário para ter acesso a sua lista de compras.
        </h3>


        <Input onChange={(text)=> setUsername(text)} value={username} label="Username" placeholder ="Ex: usuario1"/>
        <Button onClick={onClickContinue} >Continuar</Button>         
      </div>      
    </div>
  );
};

export default HomeScreen;



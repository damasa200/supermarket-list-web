import { ListCard } from "../ListCard";
import "./index.css";

export const ListRender = ({ List, onEdit, onCheckItem}) => {
  if (!List || List.length === 0) {
    return (
      <h3>Sua Lista está vazia. Clique em adicionar para inserir novos itens.</h3>
    );
  }



  return (
    <div className="list-render-container">
      {List.map((item) => (
        <ListCard onCheckItem={onCheckItem} onClick={onEdit} item={item} key={item._id} />
      ))}
    </div>
  );
};
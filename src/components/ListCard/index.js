import { useState } from "react";
import "./index.css";

export const ListCard = ({ item, onClick, onCheckItem }) => {
  const [checked, setChecked] = useState(item?.checked || false);

  return (
    <div className="list-card-container" onClick={() => onClick(item)}>
      <div className="checkbox" onClick={(e) => {
        e.stopPropagation(); 
        setChecked(!checked);
      }}>
        <img
          className="checkbox-icon"
          src={`/images/${checked ? "checked.svg" : "unchecked.svg"}`}
          alt="checkbox"
        />
      </div>

      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} Unidades</span>
      </div>

      <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
    </div>
  );
};

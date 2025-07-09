import { useState } from "react";
import "./index.css";

export const ListCard = ({ item, onClick }) => {
  const [checked, setChecked] = useState(item?.checked || false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="list-card-container" onClick={() => onClick(item)}>
      <div className="checkbox">
        <img
          className="checkbox-icon"
          src={`/images/${checked ? "checked.svg" : "unchecked.svg"}`}
          alt="checked-item"
          onClick={toggleCheck}
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

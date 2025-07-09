import "./index.css";

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${variant === "outline" ? "outline" : "main"}`}
    >
      {/* Renderiza o ícone se existir */}
      {icon && <img src={icon} alt="" className="button-icon" />}
      {children}
    </button>
  );
};

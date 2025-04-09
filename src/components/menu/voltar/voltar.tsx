import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";

const Voltar = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="botaoVoltar"
    >
      <i className="bi bi-arrow-left"></i>
    </button>
  );
};

export default Voltar;

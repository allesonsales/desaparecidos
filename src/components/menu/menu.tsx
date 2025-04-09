import { useContext, useState } from "react";
import { ArquivosContext } from "../../provider";
import "./style.css";

const Menu = () => {
  const arquivos = useContext(ArquivosContext);
  if (!arquivos) {
    return null;
  }

  const { toggleMute, silence, setDicasOpen } = arquivos;

  return (
    <div className="menuContainer">
      <button
        onClick={() => {
          setDicasOpen(true);
        }}
      >
        <i className="bi bi-question-lg"></i>
      </button>
      <button
        className="menuButton"
        onClick={() => {
          toggleMute(!silence);
        }}
      >
        <i className={silence ? `bi bi-volume-mute` : `bi bi-volume-up`}></i>
      </button>
    </div>
  );
};

export default Menu;

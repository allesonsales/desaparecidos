import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./style.css";
import { ArquivosContext } from "../../provider";
import Historia from "../../components/modalHistory/modalHistory";

const Personagens = () => {
  const personagens: string[] = ["Felipe", "Lucas", "Leticia", "Amanda"];
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const arquivos = useContext(ArquivosContext);
  if (!arquivos) {
    return null;
  }

  const {
    tocarSelecaoPersonagem,
    setPersonagem,
    personagem,
    Pulsando,
    tocarSelecionado,
  } = arquivos;

  const navigate = useNavigate();

  const irParaHistoria = () => {
    setTimeout(() => {
      navigate(`/personagens/${personagem.toLowerCase()}`);
    }, 1000);
  };

  return (
    <>
      <div className="escolha">
        <h2>Escolha sua história...</h2>
      </div>
      <div className="wrappper">
        <div className="framerContainer">
          {personagens.map((nome: string) => (
            <motion.div
              key={nome}
              className="frame"
              onMouseEnter={() => {
                setPersonagem(nome);
                tocarSelecaoPersonagem();
              }}
              onMouseLeave={() => {
                setPersonagem("");
              }}
              onClick={() => {
                tocarSelecionado();
                setPersonagem(nome);
                setSelecionado(nome);
                irParaHistoria();
              }}
            >
              <div className="texto">
                <span className="name">{nome}</span>
                <div className="historia">
                  {personagem === nome && <Historia />}
                </div>
                <div className="historiaMobile">
                  <Historia nome={nome} />
                </div>
              </div>
              <div className="mask">
                <div
                  className={`image ${nome}`}
                  style={{
                    filter:
                      selecionado === nome ? `sepia(1) saturate(2)` : `none`,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Personagens;

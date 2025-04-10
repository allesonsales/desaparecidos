import Historia from "../../components/modalHistory/modalHistory";
import { useParams } from "react-router-dom";
import "./style.css";
import Voltar from "../../components/menu/voltar/voltar";
import { useContext } from "react";
import { ArquivosContext } from "../../provider";
import { motion } from "framer-motion";
import Detetive from "../../components/chat/chat";

const HistoriaPrincipal = () => {
  const arquivos = useContext(ArquivosContext);
  if (!arquivos) {
    return null;
  }
  const { TransicaoPagina } = arquivos;

  const { personagem } = useParams();

  return (
    <>
      <Voltar />
      <motion.section id="containerPrincipal" {...TransicaoPagina}>
        <div className="videoContainer">
          <video typeof="video/mp4" loop muted autoPlay id="bgVideo">
            <source src="/desaparecidos/footage.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="imagemPrincipal">
          <div className={`mask ${personagem?.toLowerCase()}`}></div>
        </div>
        <div className="historiaPrincipal">
          <h2>{personagem}</h2>
          <Historia />
        </div>
        <Detetive />
      </motion.section>
    </>
  );
};

export default HistoriaPrincipal;

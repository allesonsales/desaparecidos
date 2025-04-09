import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css";
import { ArquivosContext } from "../../provider";
import Carregando from "../../components/carregando/carregando";

const Home = () => {
  const [historia, setHistoria] = useState<string>("");

  const arquivos = useContext(ArquivosContext);
  if (!arquivos) {
    return null;
  }

  const { Aparecendo, carregado } = arquivos;

  const introducao = `Quatro adolescentes desapareceram misteriosamente durante uma excursão escolar. 
  A floresta foi vasculhada. Nenhum sinal. Nenhum corpo. Apenas pistas fragmentadas, 
  ruídos na madrugada e objetos fora de lugar. 
  
  Lucas, Felipe, Letícia e Amanda estavam entre os mais atentos… ou os mais sensíveis 
  ao que realmente acontecia naquele lugar. 
  
  Alguns acreditam que foi um acidente. Outros preferem não comentar. Mas há quem diga 
  que eles ainda estão tentando se comunicar...`;

  useEffect(() => {
    if (!carregado) return;

    let i = 0;
    const intervalo = setInterval(() => {
      if (i >= introducao.length) {
        clearInterval(intervalo);
        return;
      }
      setHistoria((prev) => prev + introducao[i - 1]);
      i++;
    }, 30);

    return () => clearInterval(intervalo);
  }, [carregado]);

  return carregado ? (
    <section id="home">
      <div className="videoContainer">
        <video typeof="video/mp4" loop muted autoPlay id="bgVideo">
          <source src="/footage.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="introducaoContainer">
        <h1>Desaparecidos...</h1>
        <p className="introducao">{historia}</p>
      </div>

      <div className="continuar">
        <Link to="/personagens">
          <motion.button {...Aparecendo}>Investigar</motion.button>
        </Link>
      </div>
    </section>
  ) : (
    <Carregando />
  );
};

export default Home;

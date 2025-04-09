import { useContext, useState } from "react";
import { ArquivosContext } from "../../provider";
import "./style.css";

const ModalDicas = () => {
  const arquivos = useContext(ArquivosContext);

  if (!arquivos || !arquivos.dicasOpen) {
    return null;
  }

  const { dicasOpen, setDicasOpen } = arquivos;

  return (
    <div className="background">
      <div className="modalContainer">
        <i
          className="bi bi-x-circle"
          onClick={() => {
            setDicasOpen(false);
          }}
        ></i>
        <div className="dicas">
          <h2>DICAS & História</h2>
          <p>
            Quatro adolescentes desapareceram misteriosamente durante uma
            excursão escolar. A floresta foi vasculhada. Nenhum sinal. Nenhum
            corpo. Apenas pistas fragmentadas, ruídos na madrugada e objetos
            fora de lugar.
          </p>
          <p>
            Lucas, Felipe, Letícia e Amanda estavam entre os mais atentos… ou os
            mais sensíveis ao que realmente acontecia naquele lugar. Alguns
            acreditam que foi um acidente. Outros preferem não comentar. Mas há
            quem diga que eles ainda estão tentando se comunicar.
          </p>
          <ol>
            <li>Escolha um personagem.</li>
            <li>Leia sua história de introdução.</li>
            <li>Converse com o detetive para solucionar o caso.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ModalDicas;

import { JSX, useContext, useState } from "react";
import { ArquivosContext } from "../../provider";
import { motion } from "framer-motion";

const Historia = ({ nome }: { nome?: string }) => {
  const arquivos = useContext(ArquivosContext);
  if (!arquivos) {
    return null;
  }
  const { personagem: personagemDoContexto, Pulsando } = arquivos;

  const personagemAtual = nome ?? personagemDoContexto;

  let conteudo: JSX.Element | null;

  switch (personagemAtual) {
    case "Felipe":
      conteudo = (
        <motion.p {...Pulsando}>
          <b>Felipe era o nerd do grupo</b>, obcecado por tecnologia. Achava que
          havia algo estranho no acampamento e gravava sons à noite. Na
          madrugada do sumiço, deixou uma mensagem com interferência: "Eles não
          são animais... não são humanos... desliguem tudo." Só encontraram seu
          tablet, ainda ligado, repetindo a gravação.
        </motion.p>
      );
      break;
    case "Lucas":
      conteudo = (
        <motion.p {...Pulsando}>
          <b>Lucas era o mais curioso do grupo.</b> Na noite do desaparecimento,
          ficou até tarde ao lado da fogueira apagada, tentando decifrar um mapa
          achado na mochila do professor de biologia. Por volta das 2h da manhã,
          Letícia acordou com barulhos e ouviu Lucas chamando alguém... ou algo.
          Pela manhã, só restava seu caderno, com páginas arrancadas.
        </motion.p>
      );
      break;
    case "Leticia":
      conteudo = (
        <motion.p {...Pulsando}>
          <b>Letícia era a mais quieta do grupo</b>, sempre com uma boneca
          antiga que dizia ter desenterrado perto do lago. Quando perguntavam,
          respondia apenas: "Ela me protege." Na noite do sumiço, foi vista
          caminhando sozinha em direção à mata. Amanda tentou detê-la, mas
          Letícia sorriu e disse: "Agora ela quer falar com vocês." Letícia
          desapareceu naquela noite. Só a boneca voltou — sentada à beira da
          fogueira, encarando o vazio.
        </motion.p>
      );
      break;
    case "Amanda":
      conteudo = (
        <motion.p {...Pulsando}>
          <b>Amanda era a líder do grupo.</b> Sempre alerta, foi a primeira a
          notar que havia algo errado na floresta — trilhas mudavam, vozes
          familiares vinham de lugares errados. Na noite do desaparecimento,
          tentou tirar todos dali, mas foi arrastada pela mata por algo que
          ninguém viu. Sua voz ainda ecoa: "Fujam. Agora!" Tudo que restou foi
          sua jaqueta e uma trilha de sangue que sumia entre as árvores.
        </motion.p>
      );
      break;
    default:
      conteudo = null;
  }
  return <div>{conteudo}</div>;
};

export default Historia;

import { createContext, useEffect, useState, ReactNode } from "react";
import { animate, Variants } from "framer-motion";
const audioBG = new Audio("/desaparecidos/background.mp3");
const selectMenuAudio = new Audio("/desaparecidos/menuSelect.ogg");
const selecionadoAudio = new Audio("/desaparecidos/selecionado.mp3");
export const ArquivosContext = createContext<ArquivosContextType | null>(null);

type ArquivosContextType = {
  tocarSelecaoPersonagem: () => void;
  tocarSelecionado: () => void;
  personagem: string;
  setPersonagem: (nome: string) => void;
  Pulsando: Variants;
  Aparecendo: Variants;
  TransicaoPagina: Variants;
  Carregando: Variants;
  toggleMute: (mute: boolean) => void;
  silence: boolean;
  dicasOpen: boolean;
  setDicasOpen: (valor: boolean) => void;
  setCarregado: (valor: boolean) => void;
  carregado: boolean;
};

type Props = {
  children: ReactNode;
};

const Arquivos = ({ children }: Props) => {
  const [personagem, setPersonagem] = useState<string>("");
  const [silence, setSilence] = useState<boolean>(false);
  const [dicasOpen, setDicasOpen] = useState<boolean>(false);
  const [carregado, setCarregado] = useState<boolean>(false);

  const audiosCarregados: HTMLAudioElement[] = [
    selecionadoAudio,
    selectMenuAudio,
    audioBG,
  ];

  useEffect(() => {
    const startAudio = () => {
      audioBG.play();
      audioBG.loop = true;
      window.removeEventListener("click", startAudio);
    };
    window.addEventListener("click", startAudio);
    return () => window.removeEventListener("click", startAudio);
  }, []);

  const tocarSelecaoPersonagem = () => {
    selectMenuAudio.play();
  };

  const tocarSelecionado = () => {
    selecionadoAudio.play();
  };

  const toggleMute = (mute: boolean) => {
    setSilence(mute);

    audiosCarregados.forEach((som) => (som.muted = mute));
  };

  const Pulsando = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  };

  const Aparecendo = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  const TransicaoPagina = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.6 },
  };

  const Carregando = {
    animate: {
      x: [0, 10, 20, 10, 0, -10, -20, -10, 0],
      y: [-20, -10, 0, 10, 20, 10, 0, -10, -20],
    },
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear",
    },
  };

  return (
    <ArquivosContext.Provider
      value={{
        tocarSelecaoPersonagem,
        setPersonagem,
        personagem,
        Pulsando,
        Aparecendo,
        tocarSelecionado,
        toggleMute,
        silence,
        dicasOpen,
        setDicasOpen,
        TransicaoPagina,
        Carregando,
        carregado,
        setCarregado,
      }}
    >
      {children}
    </ArquivosContext.Provider>
  );
};
export default Arquivos;

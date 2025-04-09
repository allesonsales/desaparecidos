import "./style.css";
import { useParams } from "react-router-dom";

const Detetive = ({ personagem }: { personagem?: string }) => {
  const params = useParams();
  const personagemFinal = personagem ?? params.personagem;

  if (!personagemFinal) {
    return null;
  }

  switch (personagemFinal.toLowerCase()) {
    case "felipe":
      return (
        <iframe
          src="https://copilotstudio.microsoft.com/environments/9593a506-8ae5-e341-a0e1-3197d1fce6e8/bots/dio_oDetetive/webchat?__version__=2"
          frameBorder="0"
        ></iframe>
      );
    case "lucas":
      return (
        <iframe
          src="https://copilotstudio.microsoft.com/environments/9593a506-8ae5-e341-a0e1-3197d1fce6e8/bots/cr0d6_detetiveHelena/webchat?__version__=2"
          frameBorder="0"
        ></iframe>
      );
    case "leticia":
      return (
        <iframe
          src="https://copilotstudio.microsoft.com/environments/9593a506-8ae5-e341-a0e1-3197d1fce6e8/bots/cr0d6_detetiveHugo/webchat?__version__=2"
          frameBorder="0"
        ></iframe>
      );
    case "amanda":
      return (
        <iframe
          src="https://copilotstudio.microsoft.com/environments/9593a506-8ae5-e341-a0e1-3197d1fce6e8/bots/cr0d6_detetiveCaio/webchat?__version__=2"
          frameBorder="0"
        ></iframe>
      );
  }
};

export default Detetive;

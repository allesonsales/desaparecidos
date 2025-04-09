import { useContext } from "react";
import { ArquivosContext } from "../../provider";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./style.css";

const Carregando = () => {
  const arquivos = useContext(ArquivosContext);
  if (!arquivos) {
    return null;
  }
  const { Carregando, carregado, setCarregado } = arquivos;

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setCarregado(true);
      }, 1000);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!carregado)
    return (
      <AnimatePresence>
        <motion.div className="carregando">
          <motion.i className="bi bi-search" {...Carregando}></motion.i>
          <p>Carregando...</p>
        </motion.div>
      </AnimatePresence>
    );
};

export default Carregando;

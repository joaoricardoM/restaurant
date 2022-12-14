import React from "react";
import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";

type IOption = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(option: IOption) {
    return setFiltro(option.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((option) => (
        <button
          className={`${styles.filtros__filtro} ${
            filtro === option.id ? styles["filtros__filtro--ativo"] : ""
          }`}
          key={option.id}
          onClick={() => selecionarFiltro(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

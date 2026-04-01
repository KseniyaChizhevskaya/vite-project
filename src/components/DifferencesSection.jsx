import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(tape) {
    setContentType(tape);
  }

  return (
    <section>
      <h3>Верстка сайтов (HTML + CSS)</h3>
      <Button
        isActive={contentType === "way"}
        onClickParametr={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClickParametr={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClickParametr={() => handleClick("program")}
      >
        Концентрация
      </Button>
      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <div>Нажми на кнопку</div>
      )}
    </section>
  );
}

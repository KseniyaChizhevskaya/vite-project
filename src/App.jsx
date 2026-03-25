import Header from "./components/Header";
import Section from "./components/Section";
import Button from "./components/ButtonPapka/Button";
import { useState } from "react";
import { ways, differences } from "./data";

export default function App() {
  const [contentType, setContentType] = useState(null);
  //let content = "Нажми на кнопку";
  console.log("App Component Render");

  function handleClick(tape) {
    console.log("button clicked", tape);
    setContentType(tape);
    //content = tape;
  }
  return (
    <div>
      <Header></Header>
      <Section></Section>
      <main>
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
      </main>
    </div>
  );
}
//компонент  <Header></Header> можнотиспользовать много раз, тем
//самым код будет повторяться в любых местах и его не надо писать
//заново

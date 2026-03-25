import React from "react";
import mySvg from "/logo-chizhevskaya.svg";
import { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);
  // const now = new Date();
  return (
    <header className="header">
      <img src={mySvg} alt="Логотип" className="header-logo" />
      <span className="header-time">
        Время сейчас: {now.toLocaleTimeString()}
      </span>
    </header>
  );
}

//В фигурных скобках "Время сейчас: {}" можно выполнять сложение,
//вычитание и тд, нам происходит динамика
//нужно создать константу "const now = new Date()";

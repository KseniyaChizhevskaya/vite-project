import Header from "./components/Header/Header";
import EducationSection from "./components/EducationSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import TabsSection from "./components/TabsSection";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effect");
  console.log(tab);

  setTimeout(() => {
    setVisible(false);
  }, 3000);

  return (
    <>
      {visible && <Header></Header>}
      <main>
        <IntroSection></IntroSection>

        <TabsSection
          active={tab}
          onChange={(current) => setTab(current)}
        ></TabsSection>

        {tab === "main" && (
          <>
            <EducationSection></EducationSection>
            <DifferencesSection></DifferencesSection>
          </>
        )}

        {tab === "feedback" && <FeedbackSection></FeedbackSection>}

        {tab === "effect" && <EffectSection></EffectSection>}
      </main>
    </>
  );
}
//компонент  <Header></Header> можнотиспользовать много раз, тем
//самым код будет повторяться в любых местах и его не надо писать
//заново

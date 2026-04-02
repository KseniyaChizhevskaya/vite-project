import Header from "./components/Header/Header";
import EducationSection from "./components/EducationSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import TabsSection from "./components/TabsSection";

export default function App() {
  const [tab, setTab] = useState("feedback");
  console.log(tab);
  return (
    <>
      <Header></Header>
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
      </main>
    </>
  );
}
//компонент  <Header></Header> можнотиспользовать много раз, тем
//самым код будет повторяться в любых местах и его не надо писать
//заново

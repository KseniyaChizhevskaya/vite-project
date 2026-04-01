import Header from "./components/Header";
import EducationSection from "./components/EducationSection";
import DifferencesSection from "./components/DifferencesSection";

export default function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <EducationSection></EducationSection>
        <DifferencesSection></DifferencesSection>
      </main>
    </div>
  );
}
//компонент  <Header></Header> можнотиспользовать много раз, тем
//самым код будет повторяться в любых местах и его не надо писать
//заново

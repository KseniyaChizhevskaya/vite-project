//ПРОПС - props//
import { ways } from "../data";
import WayToTeachSection from "./WayToTeachSection";

export default function EducationSection() {
  //компоненты называются с большой буквы
  return (
    <div>
      <section>
        <h3>Обучение REACT</h3>

        <ul>
          {ways.map((way) => (
            <WayToTeachSection key={way.title} {...way} />
          ))}
        </ul>
      </section>
    </div>
  );
}

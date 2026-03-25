//ПРОПС - props//
import { ways } from "../data";
function WayToTeach(props) {
  const { title, description } = props;
  return (
    <div>
      <li>
        <p>
          <strong>{title}</strong> {description}
        </p>
      </li>
    </div>
  );
}

export default function Section() {
  //компоненты называются с большой буквы
  return (
    <div>
      <section>
        <h3>Обучение REACT</h3>

        <ul>
          {ways.map((way) => (
            <WayToTeach key={way.title} {...way} />
          ))}
        </ul>
      </section>
    </div>
  );
}

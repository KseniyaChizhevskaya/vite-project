import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    hasMail: true,
    hasError: true,
    reason: "error",
  });

  //const [name, setName] = useState("");
  //const [hasError, setHasError] = useState(false);
  //const [reason, setReason] = useState("error");
  //const [mail, setMail] = useState("");
  //const [hasMail, setHasMail] = useState(false);

  function handleNameChange(event) {
    //setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }
  function handleMailChange(event) {
    //console.log(event);
    // setMail(event.target.value);
    //setHasMail(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      mail: event.target.value,
      hasMail: event.target.value.trim().length === 0,
    }));
  }

  return (
    <section>
      <h3>ОБРАТНАЯ СВЯЗЬ</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="user-input"
          placeholder="Введите ваше имя"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="user-input"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="no information">Не отображается информация</option>
          <option value="no answer">Нет нужного ответа</option>
        </select>
        <label htmlFor="mail">Ваша почта</label>
        <input
          type="text"
          id="mail"
          className="user-input"
          value={form.mail}
          style={{ border: form.hasMail ? "1px solid red" : null }}
          onChange={handleMailChange}
        />

        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
          <br />
          Mail: {form.mail}
        </pre>
        <Button disabled={[form.hasError, form.hasMail]}>Отправить</Button>
      </form>
    </section>
  );
}

import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          assumenda, facere nulla labore cumque dolorum ullam veniam quos
          impedit illum dicta obcaecati ad eligendi ratione aspernatur debitis!
          Tempora, cupiditate aliquam!
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  );
}

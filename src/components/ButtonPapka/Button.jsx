import "./Button.css";

export default function Button({ children, onClickParametr, isActive }) {
  //const handleClickMouse = () => console.log("entered");
  //компоненты называются с большой буквы
  return (
    <button
      className={isActive ? "button:active" : "button"}
      onClick={onClickParametr}
      //onMouseEnter={handleClickMouse}
      //onDoubleClick={() => console.log("dbl")}
    >
      {children}
    </button>
  );
}

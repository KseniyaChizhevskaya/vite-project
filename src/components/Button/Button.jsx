import classes from "./Button.module.css";

export default function Button({ children, isActive, onClick, ...props }) {
  console.log("onClick", onClick);
  //const handleClickMouse = () => console.log("entered");
  //компоненты называются с большой буквы
  return (
    <button
      {...props}
      className={
        isActive ? "${classes.button} ${classes.active}" : classes.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

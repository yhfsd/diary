import "./Button.css";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
// Button.defaultProps = {
//   type: "default",
// }; 이제 지원 안됌
export default Button;

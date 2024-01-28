/* eslint-disable react/prop-types */
const Button = ({ children, onClick }) => {
  return (
    <div className="Button">
      <button onClick={onClick}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;

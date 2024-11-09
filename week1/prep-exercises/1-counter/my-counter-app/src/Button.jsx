const Button = ({ onIncrement }) => {
  return (
    <button className="button" onClick={onIncrement}>
      Add 1!
    </button>
  );
};

export default Button;

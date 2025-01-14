import "./footer.css";
export const Footer = () => {
  const sumar = () => {
    console.log(2 + 2);
  };

  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h2 className="footer-text">Este es mi footer</h2>
    </div>
  );
};
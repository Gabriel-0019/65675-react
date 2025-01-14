export const ProductCard = (props) => {
    console.log(props);
  
    return (
      <div style={{ border: "1px solid black" }}>
        <h2>{props.titulo}</h2>
        <h2>{props.precio}</h2>
        <h2>{props.description} </h2>
      </div>
    );
  };
  
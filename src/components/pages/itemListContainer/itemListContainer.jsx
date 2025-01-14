import { ProductCard } from "../../common/productCard/productCard";

const ItemListContainer = (props) => {
  return (
    <div>
      <h2>{props.tituloPrincipal}</h2>
      <ProductCard
        titulo="titulo 1"
        precio="precio 1"
        description="descripcion 1"
      />
      <ProductCard
        titulo="titulo 2"
        precio="precio 2"
        description="descripcion 2"
      />
      <ProductCard
        titulo="titulo 3"
        precio="precio 3"
        description="descripcion 3"
      />
      <ProductCard
        titulo="titulo 4"
        precio="precio 4"
        description="descripcion 4"
      />
    </div>
  );
};

export default ItemListContainer;
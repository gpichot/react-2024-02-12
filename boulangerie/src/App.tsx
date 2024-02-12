import React from "react";
import "./App.css";

interface ProductItemProps {
  nom: string;
  description: string;
  estEnPromo?: boolean;
  children?: React.ReactNode;
  // style?: { backgroundColor: string };
}

function ProductItem(props: ProductItemProps) {
  console.log(props);
  const { nom, description, children, estEnPromo } = props;

  const handleClick = () => alert(`${nom} Clicked`);

  return (
    <div onClick={handleClick}>
      {nom} {estEnPromo ? "En Promo" : "Pas de promo en cours"}
      <p style={{ fontStyle: "italic" }}>{description}</p>
      {children}
    </div>
  );
}

interface Product {
  nom: string;
  description: string;
}

const products: Product[] = [
  {
    nom: "Croissant",
    description: "Mon super croissant",
  },
  {
    nom: "Pain au chocolat",
    description: "Mon incroyable chocolatine",
  },
];

function App() {
  return (
    <>
      {/* <h1>Boulangerie</h1> */}
      <p>Ma super boulangerie</p>
      {products.map((product) => (
        <ProductItem
          key={product.nom}
          nom={product.nom}
          description={product.description}
        >
          <p>Achetez nos délicieuses patisseries</p>
        </ProductItem>
      ))}
    </>
  );
}

export default App;

import { getProducts } from "../../api/products.api"

export const ProductList = () => {

  const fecthProducts = async () => {
    const products = getProducts();
    console.log(products);
  }

  usee(() => {} []);

  fecthProducts();

  return <div>ProductList</div>
}

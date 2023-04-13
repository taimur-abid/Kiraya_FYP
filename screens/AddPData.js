import { products } from "./DataSetProducts";
import uuid from 'react-native-uuid';

const addProduct = (title,description,city, price) => {
    const newProduct = { id: uuid.v4(), title, city, description, price };
    products.push(newProduct);
  };

  export default addProduct;
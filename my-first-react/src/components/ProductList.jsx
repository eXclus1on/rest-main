import { useEffect, useRef, useState } from "react";
import ProductItem from "./ProductItem";
import productsNetwork from "../services/productsNetwork";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

function ProductList() {
  async function addHandler() {
    const product = {
      title: "Facas Ginsu",
      price: 35.5,
      description: "corta tudo!!!!!",
      image: "https://i.pravatar.cc",
      category: "stuff",
    };

    try {
      const result = await productsNetwork.postProduct(product);
      if (result) {
        toast.current.show({
          severity: "success",
          summary: "Product added",
          life: 3000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.current.show({
        severity: "error",
        summary: "Error adding product",
        detail: "Please contact the website administrator",
        life: 3000,
      });
    }
  }

  const [products, setProducts] = useState([]);
  const toast = useRef(null);

  useEffect(function () {
    productsNetwork.getProducts().then(function (result) {
      setProducts(result);
    });
  }, []);

  return (
    <>
      <Toast ref={toast} />
      <Button onClick={addHandler}>Add Product</Button>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductList;

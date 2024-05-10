import { useEffect, useState } from "react";

const FakeStoreAPI = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function FunctionName() {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    FunctionName();
  }, []);

  return <div></div>;
};
export default FakeStoreAPI;

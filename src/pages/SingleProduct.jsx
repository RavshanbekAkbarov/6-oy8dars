import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

// Loader funksiyasi
export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};

// SingleProduct komponenti
function SingleProduct() {
  const { product } = useLoaderData(); // Funktsiyani chaqirish kerak
  return <div>{product.title}</div>;
}

export default SingleProduct;

import { getAllProducts } from "@/services/productServices";
import useSWR from "swr";

export default function handler(request, response) {
  const products = getAllProducts();
  if (!products) {
    return response.status(404).json({ message: "Page not found" });
  }
  response.status(200).json(products);
}

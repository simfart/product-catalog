import { useQuery } from "react-query";
import { getProducts } from "../api";

export const useProducts = () => useQuery("products", getProducts);

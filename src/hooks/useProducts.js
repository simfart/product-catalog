import { useQuery } from "react-query";

export const useProducts = () => useQuery("products", []);

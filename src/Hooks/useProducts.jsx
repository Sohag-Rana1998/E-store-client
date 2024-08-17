import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import axios from "axios";
const useProducts = (
  currentPage,
  itemsPerPage,
  search,
  minPrice,
  maxPrice,
  sortField,
  sortOrder
) => {
  const axiosPublic = useAxiosPublic;
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/products?page=${currentPage}&size=${itemsPerPage}&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortField=${sortField}&sortOrder=${sortOrder}`
      );
      console.log(data);
      return data;
    },
  });
  return { products, isLoading, refetch };
};

export default useProducts;

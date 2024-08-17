import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import axios from "axios";
const useProducts = (filter) => {
  const axiosPublic = useAxiosPublic;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products?page=${
          filter?.currentPage
        }&size=${filter?.itemsPerPage}&search=${
          filter?.search || ""
        }&minPrice=${filter?.minPrice || ""}&maxPrice=${
          filter?.maxPrice || ""
        }&sortField=${filter?.sortField || ""}&sortOrder=${
          filter?.sortOrder || ""
        }&brand=${filter?.brand || ""}&category=${filter?.category || ""}`
      );
      console.log(data);
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useProducts;

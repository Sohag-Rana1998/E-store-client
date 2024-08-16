import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useProductsData = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/products");
      console.log(data);
      return data;
    },
  });
  return { products, isLoading, refetch };
};

export default useProductsData;

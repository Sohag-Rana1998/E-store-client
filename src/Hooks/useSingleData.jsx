import { useQuery } from "@tanstack/react-query";

import axios from "axios";
const useSingleData = (id) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["single-data"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/details/${id}`
      );
      console.log(data);
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useSingleData;

import React from "react";
import "@smastrom/react-rating/style.css";
import { RiShoppingBagLine } from "react-icons/ri";
import { Rating } from "@smastrom/react-rating";
import useProductsData from "../Hooks/useProductsData";
const AllProducts = () => {
  const { products, isLoading, refetch } = useProductsData();

  return (
    <div className="mt-20 max-w-7xl w-full mx-auto">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
          {products?.map((product) => (
            <div
              key={product.id}
              className="w-full  rounded-lg shadow  border hover:border-[#2C742F]"
            >
              <div className="w-full  h-[302px] relative">
                <img
                  src={product?.images}
                  className="w-full h-full p-1"
                  alt="Products"
                />
                {/* STOCK QUANTIY */}
                <div className="bg-black text-sm w-28 p-1 rounded-md text-center text-white absolute top-3 left-3">
                  {product?.stock < 1
                    ? "Out of stock"
                    : `Stock:${product.stock}`}
                </div>
              </div>

              <div className="p-4">
                <h4 className="text-gray group-hover:text-[#2C742F]">
                  {product?.title}
                </h4>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">
                    $<span>{product?.price}</span>
                  </h4>

                  <button className="rounded-full btn p-3 border bg-[#E6E6E6] group-hover:bg-[#00B207] flex justify-center items-center outline-none">
                    <RiShoppingBagLine className="text-xl group-hover:text-white" />
                  </button>
                </div>
                <Rating style={{ maxWidth: 120 }} value={4} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

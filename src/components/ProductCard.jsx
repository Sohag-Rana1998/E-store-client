import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div>
      <div className="w-full group rounded-lg shadow  border hover:border-[#2C742F]">
        <div className="w-full  h-[302px] relative">
          <img
            src="./image/Tomato.png"
            className="w-full h-full p-1"
            alt="Products"
          />
          {/* STOCK QUANTIY */}
          <div className="bg-black text-sm w-28 p-1 rounded-md text-center text-white absolute top-3 left-3">
            Out of stock
          </div>
          {/* WISHLIST AND QUUCK VIEW BUTTON */}
        </div>

        <div className="p-4">
          <h4 className="text-gray group-hover:text-[#2C742F]">Red Tomato</h4>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">
              $<span>14.99</span>
            </h4>

            <button className="rounded-full btn p-3 border bg-[#E6E6E6] group-hover:bg-[#00B207] flex justify-center items-center outline-none">
              <RiShoppingBagLine className="text-xl group-hover:text-white" />
            </button>
          </div>
          <Rating style={{ maxWidth: 120 }} value={4} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

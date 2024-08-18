import React from "react";
import { TiMinus, TiPlus } from "react-icons/ti";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaRegHeart,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import useSingleData from "../Hooks/useSingleData";
import { Rating } from "@smastrom/react-rating";

const Details = () => {
  const { _id } = useParams();
  const { data } = useSingleData(_id);
  console.log(data);
  const {
    title,
    price,
    brand,
    category,
    rating,
    date,
    images,
    stock,
    description,
  } = data || {};
  const [quantity, setQuantity] = useState(1);
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveProduct = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col md:flex-row  justify-between items-start gap-5">
      <div className="w-full md:w-[50%] h-[450px] rounded-lg">
        <img
          src={images}
          alt="product-image"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="w-full md:w-[50%]">
        <div>
          <h1 className="text-3xl font-bold inline-block mr-3">{title}</h1>
          <button className="btn btn-sm text-[#2C742F] bg-[#20B52633]">
            In Stock: {stock} pcs
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-orange-500 text-sm">
            <Rating style={{ maxWidth: 120 }} value={parseInt(rating)} />
          </span>{" "}
          <p className="text-sm">
            {" "}
            <span> 4</span> Review
          </p>
        </div>
        <div className="mt-3">
          <p className="text-2xl font-semibold text-[#2C742F]">
            $<span>{price}</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5  mt-4">
          <div className="my-2 flex items-center justify-between">
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-xl font-bold">Share item:</h5>
            <div>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaFacebook className="text-xl text-black  group-hover:text-white" />
              </button>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaTwitter className="text-xl text-black  group-hover:text-white" />
              </button>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaPinterest className="text-xl text-black  group-hover:text-white" />
              </button>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaInstagram className="text-xl text-black  group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-3">{description}</p>
          <div className="w-full flex justify-between items-center gap-3 mt-4">
            <div className="flex justify-center items-center gap-2 w-36 border p-1 rounded-[43px] ">
              <button
                onClick={handleRemoveProduct}
                className="text-lg btn bg-gray-200 btn-circle btn-sm outline-none hover:text-white hover:bg-[#128d16]"
                disabled={quantity <= 1 ? true : false}
              >
                <TiMinus className="font-thin" />
              </button>
              <span className="text-sm font-semibold">{quantity}</span>
              <button
                onClick={handleAddProduct}
                className="text-lg btn bg-gray-200 btn-circle btn-sm outline-none hover:bg-[#128d16] hover:text-white"
              >
                <TiPlus className="font-thin" />
              </button>
            </div>

            <div className="w-full">
              <button className=" btn flex items-center w-full justify-center bg-[#00B207] text-white hover:bg-[#128d16] rounded-[43px]">
                Add to Cart <HiOutlineShoppingBag />
              </button>
            </div>
            <div>
              <button className="rounded-full mb-3 text-[#2C742F]  p-3 border !bg-[20B526] hover:bg-[#128d16]  flex justify-center items-center outline-none hover:text-white">
                <FaRegHeart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

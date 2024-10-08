import { useEffect, useRef, useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { RiShoppingBagLine } from "react-icons/ri";
import { Rating } from "@smastrom/react-rating";
import useProducts from "../Hooks/useProducts";
import { FaHistory } from "react-icons/fa";

const AllProducts = () => {
  const sortRef = useRef(null);
  const brandRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sortField, setSortField] = useState("price");
  const [sortOrder, setSortOrder] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const queryData = {
    search,
    currentPage,
    itemsPerPage,
    sortField,
    sortOrder,
    brand,
    category,
    minPrice,
    maxPrice,
  };

  const { data, refetch, isLoading } = useProducts(queryData);
  console.log(data);
  const products = data?.products;
  const count = data?.totalProducts || 0;
  console.log(products, count);

  useEffect(() => {
    // Trigger refetch when the component mounts or when queryData changes
    refetch();
  }, [queryData, refetch]);

  const totalPage = Math.ceil(parseInt(count) / itemsPerPage);
  const pageArray = [...Array(totalPage).keys()].map((element) => element + 1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoader(true);
    setMinPrice(0);
    setMaxPrice(0);
    const searchText = e.target.search.value;
    setSearch(searchText);
    setTimeout(setLoader, 1000, false);
    e.target.reset();
  };

  const handleSort = () => {
    const value = sortRef.current.value;
    console.log(value);

    if (value === "LowtoHigh") {
      setLoader(true);
      setSortField("price");
      setSortOrder("asc");
      setMinPrice(0);
      setMaxPrice(0);
      setSearch("");
      setTimeout(setLoader, 1000, false);
    }
    if (value === "HighToLow") {
      setLoader(true);
      setSortField("price");
      setSortOrder("desc");
      setMinPrice(0);
      setMaxPrice(0);
      setSearch("");
      setTimeout(setLoader, 1000, false);
    }
    if (value === "newFirst") {
      setLoader(true);
      setSortField("date");
      setSortOrder("DateDesc");
      setMinPrice(0);
      setMaxPrice(0);
      setSearch("");
      setTimeout(setLoader, 1000, false);
    }
  };

  const handleBrand = () => {
    const value = brandRef.current.value;
    console.log(value);
    setBrand(value);
  };
  const handleCategory = () => {
    const value = categoryRef.current.value;
    console.log(value);
    setCategory(value);
  };
  const handlePriceRange = () => {
    const value = priceRef.current.value;
    console.log(value);
    if (value === "low") {
      setMinPrice(0.1);
      setMaxPrice(5);
    }
    if (value === "medium") {
      setMinPrice(6);
      setMaxPrice(50);
    }
    if (value === "high") {
      setMinPrice(51);
      setMaxPrice(100000);
    }
  };

  const handleFilterApply = () => {
    const queryData = {
      search,
      currentPage,
      itemsPerPage,
      sortField,
      sortOrder,
      brand,
      category,
      minPrice,
      maxPrice,
    };
    setLoader(true);

    setSearch("");
    setTimeout(setLoader, 1000, false);
  };

  const handlePrevPage = () => {
    setLoader(true);
    const queryData = {
      search,
      currentPage,
      itemsPerPage,
      sortField,
      sortOrder,
      brand,
      category,
      minPrice,
      maxPrice,
    };

    setCurrentPage(currentPage - 1);
    setTimeout(setLoader, 1000, false);
  };
  const handleNextPage = () => {
    setLoader(true);
    const queryData = {
      search,
      currentPage,
      itemsPerPage,
      sortField,
      sortOrder,
      brand,
      category,
      minPrice,
      maxPrice,
    };

    setCurrentPage(currentPage + 1);
    setTimeout(setLoader, 1000, false);
  };
  const handleSeeAll = () => {
    setLoader(true);
    setSearch("");
    setBrand("");
    setCategory("");
    setMaxPrice(0);
    setMinPrice(0);
    setSortOrder("");
    setTimeout(setLoader, 1000, false);
  };
  return loader || isLoading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
    </div>
  ) : (
    <div className="mt-5 max-w-7xl w-full mx-auto">
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-5xl font-bold">
          Featured <span className="text-[#ff4135]">Products</span>{" "}
        </h1>
        <p className="w-full md:w-[60%] mx-auto">
          {" "}
          Discover our handpicked selection of top-rated products that are
          trending now. Explore the best deals and latest arrivals to find your
          new favorites.
        </p>
      </div>
      <div className="my-5 ">
        <div className=" border p-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="w-full md:w-[50%]">
            <h4 className="font-bold">Filter:</h4>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 ">
              <select
                onChange={handleBrand}
                ref={brandRef}
                className="select select-bordered rounded-none w-full md:w-44"
              >
                <option disabled selected>
                  Brand
                </option>
                <option value={"Uniliver"}>Unilever</option>
                <option value={"Calvin Klein"}>Calvin Klein</option>
                <option value={"OTOBI"}>OTOBI</option>
                <option value={"Fresh Farms"}>Fresh Farms</option>
                <option value={"Fresh Harvest"}>Fresh Harvest</option>
              </select>
              <select
                onChange={handleCategory}
                ref={categoryRef}
                className="select select-bordered rounded-none w-full md:w-44"
              >
                <option disabled selected>
                  Category
                </option>
                <option value={"beauty"}>Beauty</option>
                <option value={"fragrances"}>Fragrances</option>
                <option value={"furniture"}>Furniture</option>
                <option value={"groceries"}>Groceries</option>
                <option value={"vegetable"}>Vegetable</option>
                <option value={"food"}>Food</option>
              </select>
              <select
                onChange={handlePriceRange}
                ref={priceRef}
                className="select select-bordered rounded-none w-full md:w-44"
              >
                <option disabled selected>
                  Price Range
                </option>
                <option value={"low"}>0.1$ to 5$</option>
                <option value={"medium"}>6$ to 50$</option>
                <option value={"high"}>51$ to Up</option>
              </select>
            </div>
          </div>
          <div className="flex items-start md:items-end flex-col-reverse md:flex-row gap-4 ">
            <div>
              <button
                onClick={handleSeeAll}
                className="flex border px-4 py-3 items-center gap-2 justify-center"
              >
                {" "}
                Reset Data <FaHistory />
              </button>
            </div>
            <div>
              <h4 className="font-bold">Sort By:</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                <select
                  onChange={handleSort}
                  ref={sortRef}
                  className="select select-bordered rounded-none w-full md:w-44"
                >
                  <option disabled selected>
                    Default
                  </option>
                  <option value={"LowtoHigh"}>Low Price to High Price</option>
                  <option value={"HighToLow"}>High Price to Low Price</option>
                  <option value={"newFirst"}>Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <form
            onSubmit={handleSearch}
            className="flex flex-row w-full px-4 md:px-0 md:w-[50%] ml-auto gap-2 my-5"
          >
            <input
              id="search"
              name="search"
              type="text"
              required
              className="py-3 pl-3 w-full bg-gray-300  focus:outline-none border"
              placeholder="Search By Property Title"
            />
            <button className="px-6 py-3 border bg-[#ff4135] hover:bg-gray-900 text-white">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="w-full  rounded-lg shadow  border hover:border-[#ff4135]"
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
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={parseInt(product?.rating)}
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <p>
                        Brand:
                        <span className="text-sm font-bold">
                          {product?.brand}
                        </span>
                      </p>
                      <p>
                        Category:{" "}
                        <span className="text-sm font-bold">
                          {product?.category}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Posting Date:{" "}
                        <span className="text-sm font-bold">
                          {new Date(product?.date).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Link to={`/details/${product?._id}`}>
                        <button className=" px-4 py-3  border   outline-none">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {count > 3 ? (
                <div className="flex justify-center items-center text-white my-5 bg-blue-500 rounded-xl p-3">
                  <div className="flex">
                    <a
                      onClick={handlePrevPage}
                      className={
                        currentPage == 1
                          ? " hidden"
                          : "px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md  dark:bg-gray-80 cursor-pointer hover:bg-blue-500 hover:text-white"
                      }
                    >
                      <div className="flex items-center -mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-1 rtl:-scale-x-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                          />
                        </svg>

                        <span className="mx-1">Previous Page</span>
                      </div>
                    </a>

                    {pageArray?.map((page) => (
                      <button
                        onClick={() => {
                          setCurrentPage(page);
                          setLoader(true);

                          setTimeout(setLoader, 1000, false);
                        }}
                        key={page}
                        className={
                          currentPage == page
                            ? "px-4 py-2 hidden md:block mx-1 transition-colors duration-300 transform bg-gray-500 rounded-md sm:inline    hover:bg-blue-500   hover:text-white  "
                            : "px-4 py-2 hidden md:block mx-1 text-gray-700 transition-colors  duration-300 transform bg-white rounded-md sm:inline hover:bg-blue-500  hover:text-white  "
                        }
                      >
                        {page}
                      </button>
                    ))}

                    <a
                      className={
                        currentPage == pageArray.length
                          ? "hidden"
                          : "px-4 py-2 mx-1  text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                      }
                      onClick={handleNextPage}
                    >
                      <div className="flex items-center cursor-pointer -mx-1">
                        <span className="mx-1">Next Page</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-1 rtl:-scale-x-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-full flex flex-col justify-center mt-5">
                    {products && products.length === 0 ? (
                      <h3 className="text-center text-3xl font-bold my-10">
                        {" "}
                        No Result Found
                      </h3>
                    ) : (
                      <></>
                    )}
                    <div className="w-full flex  justify-center">
                      <button
                        onClick={handleSeeAll}
                        className="btn w-[40] bg-blue-500 text-white text-right mb-5"
                      >
                        See All
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AllProducts;

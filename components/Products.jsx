import React from "react";
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from "react-icons/hi";

const Products = () => {
  const products = [
    {
      id: 1,
      productName: "Product A ",
      img: "https://i.pravatar.cc/350?img=1",
      dec: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corrupti. ",
      stock: 10,
      price: "$20.00",
      totalSales: 100
    },
    {
      id: 2,
      productName: "Product B",
      img: "https://i.pravatar.cc/350?img=2",
      dec: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corrupti. ",
      stock: 15,
      price: "$15.00",
      totalSales: 150
    },
    {
      id: 3,
      productName: "Product C",
      img: "https://i.pravatar.cc/350?img=3",
      dec: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corrupti. ",
      stock: 5,
      price: "$30.00",
      totalSales: 75
    }
  ];

  return (
    <>
      {/* <section className="mt-6 mb-6">
        <div className="flex-1 bg-white h-auto  rounded-lg flex-col items-center justify-center ">
          <div className="topitems p-4 flex items-center justify-between w-full">
            <div className="name">
              <h2 className="text-lg font-bold">Product Sell</h2>
            </div>
            <div className="search flex items-center gap-1">
              <div className="relative ">
                <HiOutlineSearch
                  fontSize={18}
                  className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="text-sm bg-gray-100 rounded-lg focus:outline-none active:outline-none  w-[15rem] h-9 pl-11 pr-4 "
                />
              </div>
              <div className="filter">
                <select
                  name=""
                  className="bg-gray-100 outline-none text-gray-400 text-sm px-3 rounded-lg py-2"
                  id=""
                >
                  <option className="text-gray-100 bg-gray-100 text-sm" value="">
                    Last 30 days
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-no-wrap border- borde-gray-500">
                      <div className="flex gap-6">
                        <img  className="w-20 h-12 rounded-md" src={product.img} alt="" />
                        <div className="flex flex-col ">
                            <h2 className="text-lg font-semibold">{product.productName}</h2>
                            <h6>{product.dec}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border- borde-gray-500">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border- border-gray-500">{product.price}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border- border-gray-500">
                      {product.totalSales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

<section className="mt-6 mb-6">
  <div className="bg-white rounded-lg flex-col items-center justify-center">
    <div className="topitems p-4 flex flex-col md:flex-row items-center justify-between w-full">
      <div className="name">
        <h2 className="text-lg font-bold">Product Sell</h2>
      </div>
      <div className="search flex items-center gap-1">
        <div className="relative">
          <HiOutlineSearch
            fontSize={18}
            className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="text-sm bg-gray-100 rounded-lg focus:outline-none active:outline-none w-full md:w-[15rem] h-9 pl-11 pr-4"
          />
        </div>
        <div className="filter mt-2 md:mt-0">
          <select
            name=""
            className="bg-gray-100 outline-none text-gray-400 text-sm px-3 rounded-lg py-2"
          >
            <option className="text-gray-100 bg-gray-100 text-sm" value="">
              Last 30 days
            </option>
          </select>
        </div>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Total Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 border-b border-gray-500">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img
                    className="w-20 h-12 rounded-md"
                    src={product.img}
                    alt=""
                  />
                  <div className="flex flex-col ">
                    <h2 className="text-lg font-semibold">{product.productName}</h2>
                    <h6>{product.dec}</h6>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-500">{product.stock}</td>
              <td className="px-6 py-4 border-b border-gray-500">{product.price}</td>
              <td className="px-6 py-4 border-b border-gray-500">
                {product.totalSales}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

    </>
  );
};

export default Products;

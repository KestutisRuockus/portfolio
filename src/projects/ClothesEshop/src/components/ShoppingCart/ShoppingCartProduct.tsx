import React, { useState } from "react";

export default function ShoppingCartProduct({ product }) {
  const [quantity, setQuantity] = useState<number>(1);

  function decreaseQuantity() {
    if (quantity !== 1) setQuantity((prevQuantity) => prevQuantity - 1);
  }
  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  return (
    <div className="flex max-[500px]:flex-col max-[500px]:items-center gap-4 w-full border-2 border-[#FECA5A] rounded-lg p-4 my-2 relative">
      <div className="flex max-md:flex-col md:gap-12 gap-4 justify-center items-center max-[500px]:w-2/3 w-full max-md:text-sm font-semibold">
        <div className="w-1/4 flex justify-center items-center cursor-pointer hover:opacity-80 transition-all duration-300">
          <img
            className="w-full min-w-24 m-auto"
            src={product.images[0]}
            alt={product.name}
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-1 justify-center items-center cursor-pointer hover:opacity-70 transition-all duration-300 text-center">
          <div className="text-lg text-black max-md:text-md">
            {product.brand}
          </div>
          <div className="max-md:text-sm text-sky-900">{`'${product.name}' `}</div>
          <div className="text-sm max-md:text-xs text-slate-500">
            Size: {product.sizes[1]}
          </div>
        </div>
      </div>
      <div className="flex flex-col max-[500px]:w-full w-1/3 justify-center items-center">
        <div className="w-full flex flex-col gap-1 justify-center items-center font-semibold ">
          <div className="max-md:text-sm">Total:</div>
          <div className="max-md:text-sm">
            {(product.price * quantity).toFixed(2)} {product.currency}
          </div>
          <div
            className={`text-sm text-gray-400 ${
              quantity > 1 ? "opacity-100" : "opacity-0"
            } transition-all duration-500 cursor-default`}
          >{`${quantity} x ${product.price} `}</div>
        </div>
        <div className="w-1/3 flex justify-center items-center text-gray-400 text-sm max-md:text-xs">
          <div className="px-2 border-2 border-r-0 rounded-l-full cursor-pointer bg-black text-[#FECA5A] hover:opacity-70 transition-all duration-300">
            <i onClick={decreaseQuantity} className="fa-solid fa-minus"></i>
          </div>
          <div className="px-4 border-y-2 text-black font-semibold cursor-default text-sm max-md:text-xs">
            {quantity}
          </div>
          <div
            onClick={increaseQuantity}
            className="px-2 border-2 border-l-0 rounded-r-full cursor-pointer bg-black text-[#FECA5A] hover:opacity-70 transition-colors duration-300"
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-4">
        <i className="fa-solid fa-trash-can cursor-pointer text-2xl text-rose-700 hover:opacity-70 transition-colors duration-300"></i>
      </div>
    </div>
  );
}

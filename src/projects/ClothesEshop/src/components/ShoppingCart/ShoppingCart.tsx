import React from "react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import { allItems } from "../../data/products";
import Button from "../../utils/Buttons";
import BestSeller from "../BestSeller/BestSellers";

export default function ShoppingCart() {
  return (
    <div className="w-11/12 m-auto py-8">
      <div className="text-center text-3xl font-bold text-sky-800 mb-4">
        Your Shopping Cart
      </div>
      <div className="flex max-md:flex-col gap-2 w-full">
        <div className="w-2/3 m-auto">
          <ShoppingCartProduct product={allItems[94]} />
          <ShoppingCartProduct product={allItems[95]} />
        </div>
        <div className="md:w-1/3 w-2/3 m-auto my-2 ">
          <div className="flex flex-col gap-4 sticky top-4 border-2 rounded-lg p-6">
            <div className="flex justify-between text-slate-500 font-semibold">
              <div className="max-md:text-sm">Total products:</div>
              <div className="max-md:text-sm">2</div>
            </div>
            <div className="flex justify-between font-semibold">
              <div className="md:text-2xl text-lg">Total:</div>
              <div className="md:text-2xl text-lg">9999 EUR</div>
            </div>
            <Button text="Checkout" />
          </div>
        </div>
      </div>
      <BestSeller />
    </div>
  );
}

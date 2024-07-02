import React from "react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import { allItems } from "../../data/products";
import Button from "../../utils/Buttons";
import BestSeller from "../BestSeller/BestSellers";
import PaymentsCardsIcons from "../../utils/PaymentsCardsIcons";

export default function ShoppingCart() {
  return (
    <div className="w-full  py-8">
      <div className="md:w-4/5 w-full m-auto">
        <div className="font-brandTitle text-center text-5xl font-bold text-sky-800 mb-4">
          Your Shopping Cart
        </div>
        <div className="flex max-md:flex-col gap-2 w-full">
          <div className="w-2/3 m-auto">
            <ShoppingCartProduct product={allItems[94]} />
            <ShoppingCartProduct product={allItems[95]} />
            <ShoppingCartProduct product={allItems[66]} />
          </div>
          <div className="md:w-1/3 w-2/3 m-auto my-2 ">
            <div className="flex flex-col gap-4 sticky top-24 border-2 rounded-lg p-6">
              <div className="flex justify-between text-slate-500 font-semibold">
                <div className="font-base">Total products:</div>
                <div className="font-base max-md:text-sm">2</div>
              </div>
              <div className="flex justify-between font-semibold">
                <div className="font-base lg:text-2xl md:text-xl text-xl">
                  Total:
                </div>
                <div className="font-base lg:text-2xl md:text-xl text-lg">
                  9999 EUR
                </div>
              </div>
              <Button text="Checkout" />
            </div>
          </div>
        </div>
      </div>
      <PaymentsCardsIcons />
      <BestSeller />
    </div>
  );
}

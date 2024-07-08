import React from "react";
import { allItems } from "../../data/products";
import ProductCard from "../Product/ProductCard";

export default function BestSeller() {
  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Get a random list of 10 products as Top Sellers.
  function randomTopSellers(itemsNumber: number = 5) {
    let randomTopSellers: any[] = [];
    for (let i = 0; i < itemsNumber; i++) {
      const randomItem: any = allItems[random(0, 100)];
      randomTopSellers.push(randomItem);
    }
    return randomTopSellers;
  }

  const testProductCard = randomTopSellers();
  return (
    <div className="w-4/5 my-16 rounded-lg m-auto border-4">
      <div>
        <h1 className="font-brandTitle text-center mt-4 text-6xl font-semibold text-sky-800 px-2">
          Top Sellers from the Past Month
        </h1>
      </div>
      <div className="w-full m-auto flex gap-2 justify-center">
        <ProductCard products={testProductCard} isBestSellerComponent={true} />
      </div>
    </div>
  );
}

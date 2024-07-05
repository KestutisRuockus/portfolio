import React from "react";
import CollectionsAndSubcategoriesDropList from "./CollectionsAmdSubcategoriesDropList";
import ProductCard from "../../components/Product/ProductCard";
import { allItems } from "../../data/products";

export default function CurrentSelectedCollection({ products }) {
  const testProductCard = [
    allItems[0],
    allItems[65],
    allItems[89],
    allItems[114],
    allItems[124],
    allItems[45],
    allItems[36],
  ];

  return (
    <div className="w-full flex max-md:items-center max-md:flex-col m-auto">
      <CollectionsAndSubcategoriesDropList />
      <ProductCard products={testProductCard} isBestSellerComponent={false} />
    </div>
  );
}

import React from "react";
import CollectionsAndSubcategoriesDropList from "./CollectionsAmdSubcategoriesDropList";
import ProductCard from "../Product/ProductCard";
export default function CurrentSelectedCollection({ products }) {
  return (
    <div className="w-full flex max-md:items-center max-md:flex-col">
      <CollectionsAndSubcategoriesDropList />
      <ProductCard products={products} />
    </div>
  );
}

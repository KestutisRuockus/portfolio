import React, { useContext } from "react";
import CollectionsAndSubcategoriesDropList from "./CollectionsAmdSubcategoriesDropList";
import ProductCard from "../../components/Product/ProductCard";
import { ClothesEShopContext } from "../../useContext/ClothesEShopContext";

export default function CurrentSelectedCollection() {
  const productsContext = useContext(ClothesEShopContext);
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div className="w-full">
      <h2 className="text-center text-5xl font-brandTitle text-sky-950 mt-8">
        {productsContext.currentListTitle}
      </h2>
      <div className="w-full flex max-md:items-center max-md:flex-col m-auto">
        <CollectionsAndSubcategoriesDropList />
        {productsContext.currentList.length === 0 ? (
          <div className="p-8 font-base text-lg">
            There are no products in this category.
          </div>
        ) : (
          <ProductCard
            products={productsContext.currentList}
            isBestSellerComponent={false}
          />
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar/Navbar";
import Footer from "./src/components/Footer/Footer";
import { allItems } from "./src/data/products";
import { ClothesEShopContext } from "./src/useContext/ClothesEShopContext";

type CurrentListProps = {
  id: string;
  name: string;
  description: string;
  collection: string;
  subcategory: string;
  price: number;
  currency: string;
  sizes: string[];
  brand: string;
  material: string;
  availability: boolean;
  stock_quantity: number;
  images: string[];
  rating: number;
};

export default function ClothesEshopIndex() {
  const [currentList, setCurrentList] = useState<CurrentListProps[]>([]);
  const [currentListPage, setCurrentListPage] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<
    CurrentListProps[] | undefined
  >(undefined);
  const [currentListTitle, setCurrentListTitle] =
    useState<string>("All Collections");

  return (
    <div className="bg-white w-full min-h-screen">
      <ClothesEShopContext.Provider
        value={{
          allItems,
          currentList,
          setCurrentList,
          shoppingCart,
          setShoppingCart,
          currentListTitle,
          setCurrentListTitle,
          currentListPage,
          setCurrentListPage,
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </ClothesEShopContext.Provider>
    </div>
  );
}

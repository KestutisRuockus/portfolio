import { useContext } from "react";
import { allItems } from "../data/products";
import { ClothesEShopContext } from "../useContext/ClothesEShopContext";

export async function filterListByCollectionType(collection: string) {
  console.log(collection);

  const productsContext = useContext(ClothesEShopContext);

  if (collection !== "All") {
    const filteredList = allItems.filter(
      (product) => product.collection === `${collection}'s Clothing`
    );
    productsContext.setCurrentList(filteredList);
  } else {
    productsContext.setCurrentList(allItems);
  }
}

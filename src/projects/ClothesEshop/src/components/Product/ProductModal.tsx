import React, { useState } from "react";
import Button from "../../utils/Buttons";

type ProductModalProps = {
  product: {
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
};

export default function ProductModal({ product }: ProductModalProps) {
  const [currentImage, setCurrentImage] = useState<string>(product.images[0]);

  // render images on side and set currentImage state onMouseEnter
  function getAndRenderImages(images: string[]) {
    return (
      <div className="w-1/4 h-full flex flex-col gap-6 justify-between">
        {images.map((image, index) => (
          <a key={index} href={image} target="_blank">
            <img
              onMouseEnter={() => setCurrentImage(image)}
              className="w-full h-[33%] hover:opacity-80"
              src={image}
            />
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="flex md:flex-row flex-col justify-center items-center max-md:items-center md:gap-2 gap-12 lg:w-4/5 w-full m-auto sm:p-8 p-2 pb-12">
      {/* images */}
      <div className="bg-gray-100 md:w-1/3 sm:w-1/2 max-[450px]:w-4/5 w-2/3 h-fit flex gap-2 p-2 border-2 rounded-lg">
        {getAndRenderImages(product.images)}
        {/* current big image element */}
        <div className="w-2/3">
          <a href={currentImage} target="_blank">
            <img
              className="w-full h-full"
              src={currentImage}
              alt={product.name}
            />
          </a>
        </div>
      </div>
      {/* info */}
      <div className="md:w-2/3 w-full flex justify-center items-center">
        <div className="sm:w-2/3 w-4/5 m-auto flex flex-col gap-4">
          <div className="flex justify-end">
            <div className="text-gray-400 text-end text-sm font-base">{`${product.collection}`}</div>
            <div className="text-gray-400 text-end text-sm font-base">{`, ${product.subcategory}`}</div>
          </div>
          <div>
            <h1 className="text-3xl font-[900] font-name">{product.name}</h1>
          </div>
          <div>
            <h1 className="font-brandTitle text-2xl font-semibold text-sky-950">
              {product.brand}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-sky-800 font-semibold font-base">{`${product.price} ${product.currency}`}</h1>
            <div className="border-2 border-yellow-400 rounded-full p-2">
              <span className="w-fit rounded-full mt-4 font-semibold">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-base">Size:</div>
            <div className="flex max-[400px]:flex-col justify-between">
              <select
                className="border-2 p-1 text-sm rounded-lg cursor-pointer max-[400px]:w-2/3"
                name="size"
              >
                <option disabled value="choose a size">
                  Choose a Size
                </option>
                {product.sizes.map((size) => (
                  <option className="text-sm font-base" key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <div className="font-base text-gray-400 text-sm min-[401px]:text-end">
                Available quantity: {product.stock_quantity}
              </div>
            </div>
          </div>
          <Button text="Add To Cart" />
          <div className="font-base border-dashed border-b-4 pb-2">
            {product.description}
          </div>
          <div>
            <div className="text-gray-400 text-sm font-base">Material:</div>
            <div className="font-base">{product.material}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import TmdbIndex from "./projects/TMDB/TmdbIndex";
import DoctorCareIndex from "./projects/DoctorCare/DoctorCareIndex";
import Prices from "./projects/CarRentPlatform/src/pages/Prices/Prices";
import FAQ from "./projects/CarRentPlatform/src/pages/FAQ/FAQ";
import AboutUs from "./projects/CarRentPlatform/src/pages/AboutUs/AboutUs";
import Contacts from "./projects/CarRentPlatform/src/pages/Contacts/Contacts";
import CarRentalPlatformApp from "./projects/CarRentPlatform/CarRentalPlatformApp";
import ClothesEshopIndex from "./projects/ClothesEshop/ClothesEshopIndex";
import CurrentSelectedCollection from "./projects/ClothesEshop/src/pages/CurrentCollection/CurrentSelectedCollection";
import MainLayout from "./projects/ClothesEshop/src/layouts/MainLayout";
import NotFound from "./projects/ClothesEshop/src/pages/NotFound/NotFound";
import ShoppingCart from "./projects/ClothesEshop/src/pages/ShoppingCart/ShoppingCart";
import Checkout from "./projects/ClothesEshop/src/pages/Checkout/Checkout";
import ShoppingCartLayout from "./projects/ClothesEshop/src/layouts/ShoppingCartLayout";
import ProductModal, {
  productDetailsLoader,
} from "./projects/ClothesEshop/src/components/Product/ProductModal";
import CurrentProductsLayout from "./projects/ClothesEshop/src/layouts/CurrentProductsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/portfolio" element={<Home />} />
      <Route path="tmdb-project" element={<TmdbIndex />} />
      <Route path="doctorcare" element={<DoctorCareIndex />} />
      {/* CAR RENTAL PLATFORM ROUTES */}
      <Route path="carrentplatform" element={<CarRentalPlatformApp />} />
      <Route path="carrentplatform/prices" element={<Prices />} />
      <Route path="carrentplatform/faq" element={<FAQ />} />
      <Route path="carrentplatform/aboutus" element={<AboutUs />} />
      <Route path="carrentplatform/contacts" element={<Contacts />} />
      {/* CLOTHES E-SHOP ROUTES */}
      <Route path="clotheseshop" element={<ClothesEshopIndex />}>
        <Route index element={<MainLayout />} />
        <Route
          path=":id"
          element={<ProductModal />}
          loader={productDetailsLoader}
        />
        <Route path="collection" element={<CurrentProductsLayout />}>
          <Route index element={<CurrentSelectedCollection />} />
          <Route
            path=":id"
            element={<ProductModal />}
            loader={productDetailsLoader}
          />
        </Route>
        <Route path="shoppingcart" element={<ShoppingCartLayout />}>
          <Route index element={<ShoppingCart />} />
          <Route
            path=":id"
            element={<ProductModal />}
            loader={productDetailsLoader}
          />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

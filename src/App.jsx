import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { Header } from "./components";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./Pages/home";
import BusinessCards from "./Pages/business-cards";
import PostcardsAndPrintAdvertising from "./Pages/postcards-and-print-advertising";
import Help from "./Pages/help";
import Signin from "./Pages/signin";
import MyProjects from "./Pages/projects";
import Cart from "./Pages/cart";
import Deals from "./Pages/deals";
import SignsBannersAndPosters from "./Pages/signs-banners-and-posters";
import LabelsStickersAndPackaging from "./Pages/labels-stickers-and-packaging";
import HomeAndGifts from "./Pages/home-and-gifts";
import CelebrationsInvitationsAndStationary from "./Pages/celebrations-invitations-and-stationery";
import Wedding from "./Pages/wedding";
import ClothingAndBags from "./Pages/clothing-and-bags";
import PromotionalProducts from "./Pages/promotional-products";
import DesignAndLogo from "./Pages/design-and-logo";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/business-cards" element={<BusinessCards />} />
        <Route
          path="/postcards-and-print-advertising"
          element={<PostcardsAndPrintAdvertising />}
        />
        <Route
          path="/signs-banners-and-posters"
          element={<SignsBannersAndPosters />}
        />
        <Route
          path="/labels-stickers-and-packaging"
          element={<LabelsStickersAndPackaging />}
        />
        <Route path="/home-and-gifts" element={<HomeAndGifts />} />
        <Route
          path="/celebrations-invitations-and-stationery"
          element={<CelebrationsInvitationsAndStationary />}
        />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/clothing-and-bags" element={<ClothingAndBags />} />
        <Route path="/promotional-products" element={<PromotionalProducts />} />
        <Route path="/design-and-logo" element={<DesignAndLogo />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/projects" element={<MyProjects />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
      <SpeedInsights />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

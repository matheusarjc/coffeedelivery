import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

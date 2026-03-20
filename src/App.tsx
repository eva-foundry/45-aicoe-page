// EVA-STORY: F45-04-001
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { ProductsPage } from "./pages/products/ProductsPage";
import { ProgressPage } from "./pages/progress/ProgressPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="progress" element={<ProgressPage />} />
      </Route>
    </Routes>
  );
}

export default App;
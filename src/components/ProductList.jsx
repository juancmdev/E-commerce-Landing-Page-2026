import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Productos Destacados 🌟
        </h2>
        <span className="text-slate-400 text-sm">
          Mostrando {PRODUCTS.length} artículos
        </span>
      </div>

      {/* 📐 Cuadrícula Responsiva (Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

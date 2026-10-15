const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-lg">
      <div>
        {/* 🎨 Icono o Imagen del Producto */}
        <div className="w-full h-40 bg-slate-700/50 rounded-xl flex items-center justify-center text-6xl mb-4">
          {product.image}
        </div>

        {/* 🏷️ Categoría y Título */}
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-white mt-1 mb-2">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm mb-4">{product.description}</p>
      </div>

      {/* 💰 Precio y Botón de Compra */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
        <span className="text-2xl font-extrabold text-white">
          ${product.price.toFixed(2)}
        </span>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2 rounded-lg transition-colors">
          Agregar 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

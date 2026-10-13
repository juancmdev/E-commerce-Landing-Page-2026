const Navbar = () => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* 🏷️ Logo / Título de la tienda */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛍️</span>
          <span className="text-xl font-bold text-white tracking-wide">
            TechStore
          </span>
        </div>

        {/* 🛒 Botón del Carrito */}
        <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md">
          <span>🛒 Carrito</span>
          <span className="bg-sky-700 text-xs px-2 py-0.5 rounded-full font-bold">
            0
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

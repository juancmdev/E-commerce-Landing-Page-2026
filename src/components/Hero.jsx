const Hero = () => {
  return (
    <section className="relative bg-slate-800 text-white overflow-hidden border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 📝 Texto y Llamada a la Acción */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Nueva Colección 2026 🏔️
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Equipa tu pasión, <br />
            <span className="text-emerald-400">domina cada aventura</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-xl mx-auto md:mx-0">
            Descubre equipamiento de alta calidad para tus deportes favoritos y
            hobbies extremos. Diseñados para rendir al máximo nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20">
              Explorar Catálogo 🚀
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 py-3 rounded-xl transition-colors border border-slate-600">
              Ver Ofertas 🔥
            </button>
          </div>
        </div>

        {/* 🖼️ Imagen o Tarjeta Visual Representativa */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md h-80 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-2xl border border-slate-700 p-4 flex items-center justify-center shadow-2xl">
            <div className="text-center space-y-2">
              <span className="text-7xl">⚽🚴‍♂️🧗‍♀️</span>
              <p className="text-slate-400 font-medium">Deportes & Hobbies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

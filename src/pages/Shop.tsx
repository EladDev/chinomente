import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';

interface Producto {
  id: number;
  nombre: string;
  precio: string;
  imagen: string;
}

export default function Shop() {
  const productos: Producto[] = [
    { id: 1, nombre: "Camiseta Neon Tour", precio: "$25.00", imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, nombre: "Vinilo Diamante", precio: "$40.00", imagen: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, nombre: "Gorra Chinomente", precio: "$20.00", imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop" }
  ];

  const handleCartClick = () => {
    console.log("Carrito clickeado");
  };

  const handleProviderClick = () => {
    console.log("Proveedor clickeado");
  };

  return (
    <div className="z-10 w-full max-w-6xl p-4 md:p-8 bg-zinc-900/70 backdrop-blur-xl rounded-3xl border border-[#39ff14]/20 shadow-[0_0_60px_rgba(57,255,20,0.05)] my-10">
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="text-gray-400 hover:text-[#39ff14] flex items-center gap-2 transition-colors font-medium">
          <span>&larr;</span> Volver al inicio
        </Link>
        <button 
          onClick={handleCartClick}
          className="flex items-center gap-2 bg-[#39ff14] text-black px-4 py-2 rounded-full font-bold hover:bg-white transition-colors shadow-[0_0_15px_rgba(57,255,20,0.3)]"
        >
          <span>🛒</span> Carrito (0)
        </button>
      </div>

      <h2 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Diamante <span className="text-[#39ff14]">Store</span></h2>
      <p className="text-gray-400 mb-10 text-lg">Colección oficial de merch. Edición limitada.</p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {productos.map((producto) => (
          <ProductCard 
            key={producto.id} 
            name={producto.nombre} 
            price={producto.precio} 
            image={producto.imagen} 
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 p-6 rounded-2xl">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
           <span className="text-[#39ff14] text-3xl">🏪</span>
           <div>
             <h3 className="text-lg font-bold text-white">¿Eres Proveedor?</h3>
             <p className="text-gray-400 text-sm">Únete a nuestra red de tiendas y distribuidores.</p>
           </div>
        </div>
        <button 
          onClick={handleProviderClick}
          className="w-full md:w-auto px-6 py-3 border-2 border-[#39ff14] text-[#39ff14] font-bold rounded-xl hover:bg-[#39ff14] hover:text-black transition-colors"
        >
          Contactar como Proveedor
        </button>
      </div>
    </div>
  );
}
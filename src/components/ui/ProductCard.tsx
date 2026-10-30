interface ProductProps {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div className="group bg-black rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#39ff14] transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-zinc-900 flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 text-center">
        <h4 className="text-lg font-bold text-white mb-2">{name}</h4>
        <p className="text-xl font-black text-[#39ff14] mb-4">{price}</p>
        <button className="w-full py-2 border border-zinc-700 text-white rounded-lg font-bold hover:bg-[#39ff14] hover:text-black hover:border-[#39ff14] transition-all">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
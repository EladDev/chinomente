interface EventProps {
  title: string;
  date: string;
  location: string;
  image: string;
  price: string;
}

export default function EventCard({ title, date, location, image, price }: EventProps) {
  return (
    <div className="group bg-black rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#39ff14] transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <span className="absolute top-3 right-3 bg-[#39ff14] text-black text-xs font-bold px-3 py-1 rounded-full">
          {date}
        </span>
      </div>
      
      <div className="p-5">
        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#39ff14] transition-colors">{title}</h4>
        <p className="text-sm text-gray-400 mb-4">{location}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black text-white">{price}</span>
          <button className="bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/50 px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#39ff14] hover:text-black transition-all">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
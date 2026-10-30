import { Link } from 'react-router-dom';
import { Ticket, ShoppingBag, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="z-10 w-full max-w-7xl px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* HERO SECTION */}
      <div className="text-center flex flex-col items-center mb-16 w-full">
        
        {/* Título Principal Responsivo */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#39ff14] via-[#a3ff12] to-[#39ff14] drop-shadow-[0_0_30px_rgba(57,255,20,0.6)] text-center leading-tight">
          DiamanteStore
        </h1>
        
        <div className="flex items-center gap-4 my-3 opacity-80">
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#39ff14]"></div>
          <span className="text-sm md:text-xl text-gray-400 font-serif italic">by</span>
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#39ff14]"></div>
        </div>

        {/* Subtítulo Responsivo */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-light tracking-[0.1em] md:tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase mb-10 text-center flex flex-col md:flex-row md:gap-4 items-center">
          <span>Addy Diamond</span>
          <span className="text-[#39ff14] text-sm md:text-2xl my-1 md:my-0">&</span>
          <span>Chinomente</span>
        </h2>
        
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl px-4">
          <Link to="/eventos" className="flex-1 px-6 py-4 bg-[#39ff14] text-black font-black text-base md:text-lg rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2 group">
            <Ticket size={24} className="group-hover:rotate-12 transition-transform" /> 
            COMPRAR TICKETS
          </Link>
          <Link to="/tienda" className="flex-1 px-6 py-4 border-2 border-[#39ff14] text-[#39ff14] font-black text-base md:text-lg rounded-xl hover:bg-[#39ff14] hover:text-black hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(57,255,20,0.1)]">
            <ShoppingBag size={24} className="group-hover:-translate-y-1 transition-transform" /> 
            TIENDA OFICIAL
          </Link>
        </div>
      </div>

      {/* PRÓXIMO EVENTO DESTACADO */}
      <div className="w-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-[#39ff14]/30 relative group cursor-pointer flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop" alt="Próximo Evento" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div>
            <span className="text-[#39ff14] font-bold text-sm tracking-widest uppercase mb-1 flex items-center justify-center md:justify-start gap-2"><Calendar size={14}/> Próximo Show</span>
            <h3 className="text-2xl md:text-3xl font-black text-white">Neon Nights Tour</h3>
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-1 mt-2"><MapPin size={14}/> Madrid, España • 15 NOV 2026</p>
          </div>
        </div>
        <Link to="/eventos" className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-[#39ff14] transition-colors flex items-center justify-center gap-2">
          Ver Detalles <ChevronRight size={18}/>
        </Link>
      </div>

    </div>
  );
}
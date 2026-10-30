import { Link } from 'react-router-dom';

// --- COMPONENTES DE ICONOS SVG NATIVOS ---
const TicketIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>
  </svg>
);

const ShoppingBagIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const CalendarIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const MapPinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ChevronRightIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

// --- COMPONENTE PRINCIPAL ---
export default function Home() {
  return (
    <div className="z-10 w-full max-w-7xl px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* HERO SECTION */}
      <div className="text-center flex flex-col items-center mb-16 w-full">
        
        {/* Título Principal Responsivo */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#39ff14] via-[#a3ff12] to-[#39ff14] drop-shadow-[0_0_30px_rgba(57,255,20,0.6)] text-center leading-tight">
          DiamenteStore
        </h1>
        
        <div className="flex items-center gap-4 my-3 opacity-80">
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#39ff14]"></div>
          <span className="text-sm md:text-xl text-gray-400 font-serif italic">by</span>
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#39ff14]"></div>
        </div>

        {/* Subtítulo Responsivo */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-light tracking-[0.1em] md:tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase mb-10 text-center flex flex-col md:flex-row md:gap-4 items-center">
          <span>Addy Diam0nd 💎</span>
          <span className="text-[#39ff14] text-sm md:text-2xl my-1 md:my-0">&</span>
          <span>ChinoMente </span>
        </h2>
        
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl px-4">
          <Link to="/eventos" className="flex-1 px-6 py-4 bg-[#39ff14] text-black font-black text-base md:text-lg rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2 group">
            <TicketIcon size={24} className="group-hover:rotate-12 transition-transform" /> 
            COMPRAR TICKETS
          </Link>
          <Link to="/tienda" className="flex-1 px-6 py-4 border-2 border-[#39ff14] text-[#39ff14] font-black text-base md:text-lg rounded-xl hover:bg-[#39ff14] hover:text-black hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(57,255,20,0.1)]">
            <ShoppingBagIcon size={24} className="group-hover:-translate-y-1 transition-transform" /> 
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
            <span className="text-[#39ff14] font-bold text-sm tracking-widest uppercase mb-1 flex items-center justify-center md:justify-start gap-2"><CalendarIcon size={14}/> Próximo Show</span>
            <h3 className="text-2xl md:text-3xl font-black text-white">Neon Nights Tour</h3>
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-1 mt-2"><MapPinIcon size={14}/> Madrid, España • 15 NOV 2026</p>
          </div>
        </div>
        <Link to="/eventos" className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-[#39ff14] transition-colors flex items-center justify-center gap-2">
          Ver Detalles <ChevronRightIcon size={18}/>
        </Link>
      </div>

    </div>
  );
}
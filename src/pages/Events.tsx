import { Link } from 'react-router-dom';
import EventCard from '../components/ui/EventCard';
import { ArrowLeft, Mic2, Ticket } from 'lucide-react';

export default function Events() {
  const eventos = [
    { id: 1, titulo: "Neon Nights Tour", fecha: "15 NOV 2026", lugar: "Madrid, España", imagen: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop", precio: "$45.00" },
    { id: 2, titulo: "Diamante Fest", fecha: "22 NOV 2026", lugar: "Ciudad de México", imagen: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop", precio: "$60.00" },
    { id: 3, titulo: "Addy Diamond Acoustic", fecha: "05 DIC 2026", lugar: "Bogotá, Colombia", imagen: "https://images.unsplash.com/photo-1470229722913-7c090b33230a?q=80&w=1000&auto=format&fit=crop", precio: "$35.00" }
  ];

  return (
    <div className="z-10 w-full max-w-6xl p-4 md:p-8 bg-zinc-900/70 backdrop-blur-xl rounded-3xl border border-[#39ff14]/20 shadow-[0_0_60px_rgba(57,255,20,0.05)] my-10">
      <Link to="/" className="text-gray-400 hover:text-[#39ff14] mb-8 flex items-center gap-2 transition-colors w-fit font-medium">
        <ArrowLeft size={20}/> Volver al inicio
      </Link>
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Próximos <span className="text-[#39ff14]">Eventos</span></h2>
          <p className="text-gray-400 mt-2 text-lg">Asegura tu lugar en la experiencia Chinomente.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {eventos.map((evento) => (
          <EventCard 
            key={evento.id} 
            title={evento.titulo} 
            date={evento.fecha} 
            location={evento.lugar} 
            image={evento.imagen} 
            price={evento.precio} 
          />
        ))}
      </div>

      {/* SECCIÓN DE BANDAS / CONTACTO (Más compacta) */}
      <div className="grid md:grid-cols-2 gap-6 bg-black/40 p-6 rounded-2xl border border-zinc-800">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#39ff14]/10 rounded-xl">
            <Ticket className="text-[#39ff14]" size={24}/>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">¿Ya tienes tus tickets?</h3>
            <p className="text-gray-400 text-sm mb-3">Accede a tu cuenta para ver tus compras.</p>
            <button className="text-[#39ff14] font-bold text-sm hover:underline">Ir a mi cuenta &rarr;</button>
          </div>
        </div>
        <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-6">
          <div className="p-3 bg-[#39ff14]/10 rounded-xl">
            <Mic2 className="text-[#39ff14]" size={24}/>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">¿Eres Banda Nueva?</h3>
            <p className="text-gray-400 text-sm mb-3">Envíanos tu demo para abrir un show.</p>
            <button className="text-[#39ff14] font-bold text-sm hover:underline">Enviar Demo &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
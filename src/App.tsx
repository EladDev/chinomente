import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NeonNotesBackground from './components/NeonNotesBackground';
import Home from './pages/Home';
import Events from './pages/Events';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      {/* 
        IMPORTANTE: 
        - No poner bg-[#050505] aquí, porque tapa el canvas.
        - El canvas tiene z-0.
        - El contenido tiene z-10.
      */}
      <div className="relative min-h-screen text-white flex flex-col overflow-x-hidden selection:bg-[#39ff14] selection:text-black">
        
        {/* Fondo de notas (Capa 0) */}
        <NeonNotesBackground />
        
        {/* Contenido de las páginas (Capa 10, arriba del canvas) */}
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/tienda" element={<Shop />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
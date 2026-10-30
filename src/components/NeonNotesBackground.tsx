import { useEffect, useRef } from 'react';

const NeonNotesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const notes = ['♪', '♫', '♬', '♩'];
    const particleCount = width < 768 ? 20 : 40;

    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 15 + 10,
      speedY: Math.random() * 0.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      symbol: notes[Math.floor(Math.random() * notes.length)],
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#39ff14';
        ctx.fillStyle = `rgba(57, 255, 20, ${p.opacity})`;
        ctx.font = `${p.size}px Arial`;
        ctx.fillText(p.symbol, p.x, p.y);

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width || p.x < 0) {
          p.speedX *= -1;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // z-0 para que esté sobre el body (que es negro) pero debajo del contenido (z-10)
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default NeonNotesBackground;
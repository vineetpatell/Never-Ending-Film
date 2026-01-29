import { useEffect, useRef } from 'react';

interface VFXParticlesProps {
  className?: string;
  particleCount?: number;
  speed?: number;
  connectParticles?: boolean;
  color?: string;
}

const VFXParticles = ({ 
  className = '', 
  particleCount = 50, 
  speed = 1,
  connectParticles = true,
  color = '#ff0048'
}: VFXParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulsePhase: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed * 0.5,
      vy: (Math.random() - 0.5) * speed * 0.5,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      pulsePhase: Math.random() * Math.PI * 2
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const updateParticles = (time: number) => {
      particles.forEach((particle) => {
        // Subtle floating motion
        particle.x += particle.vx + Math.sin(time * 0.001 + particle.pulsePhase) * 0.1;
        particle.y += particle.vy + Math.cos(time * 0.001 + particle.pulsePhase) * 0.1;

        // Pulse opacity
        particle.opacity = 0.15 + Math.sin(time * 0.002 + particle.pulsePhase) * 0.1;

        // Wrap around edges smoothly
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;
      });
    };

    const drawParticles = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connection lines between nearby particles
      if (connectParticles) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 120) * 0.15;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }
      
      // Draw particles with glow
      particles.forEach(particle => {
        const pulsingSize = particle.size + Math.sin(time * 0.003 + particle.pulsePhase) * 0.5;
        
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulsingSize * 4
        );
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.5, `${color}40`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulsingSize * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.globalAlpha = particle.opacity * 2;
        ctx.fillStyle = color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulsingSize, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = (time: number) => {
      updateParticles(time);
      drawParticles(time);
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, speed, connectParticles, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default VFXParticles;
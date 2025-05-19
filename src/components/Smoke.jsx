import React, { useRef, useEffect, useState } from "react";

const SmokeCursor = () => {
  const canvasRef = useRef(null);
  const [canvasVisible, setCanvasVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];

    const createParticle = (x, y) => {
      const radius = Math.random() * 5 + 5;
      return {
        x,
        y,
        radius,
        opacity: 1,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        dx: (Math.random() - 0.5) * 3,
        dy: (Math.random() - 1.5) * 3,
        dr: 0.1 + Math.random() * 0.2,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(80, 60, 150, ${p.opacity})`; // purple-blue
        ctx.shadowColor = `rgba(127, 90, 240, ${p.opacity})`;
        ctx.shadowBlur = 25;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.radius += p.dr;
        p.opacity -= 0.01;

        if (p.opacity <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest("button, a, .interactive");
      if (target) setCanvasVisible(false);
    };

    const handleMouseOut = (e) => {
      const target = e.relatedTarget?.closest("button, a, .interactive");
      if (!target) setCanvasVisible(true);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-[9999] transition-opacity duration-300 ${
        canvasVisible ? "opacity-100" : "opacity-0"
      } pointer-events-none`}
    />
  );
};

export default SmokeCursor;

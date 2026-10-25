export default function HeroParticles() {
  const particles = [
    { top: "80%", left: "10%", size: "8px", duration: "12s", delay: "0s" },
    { top: "88%", left: "22%", size: "10px", duration: "15s", delay: "1s" },
    { top: "85%", left: "15%", size: "6px", duration: "14s", delay: "2s" },
    { top: "78%", left: "88%", size: "8px", duration: "16s", delay: "0.5s" },
    { top: "90%", left: "82%", size: "7px", duration: "13s", delay: "1.5s" },
    { top: "82%", left: "78%", size: "12px", duration: "17s", delay: "2.5s" },
    { top: "92%", left: "5%", size: "9px", duration: "14s", delay: "1.2s" },
    { top: "85%", left: "92%", size: "6px", duration: "13.5s", delay: "3s" },
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Self-contained keyframe animation */}
      <style>{`
        @keyframes floatUpAndFade {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 0.1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-280px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>

      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white/70 shadow-sm"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animation: `floatUpAndFade ${particle.duration} linear infinite`,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

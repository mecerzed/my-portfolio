export default function BouncingBall() {
  return (
    <div
      className="relative w-full h-full min-h-[280px] flex flex-col items-center justify-start pt-4"
      aria-hidden="true"
    >
      <div className="w-px bg-dark/25 animate-string" />
      <div className="w-16 h-16 rounded-full animate-ball shadow-lg" />
    </div>
  );
}
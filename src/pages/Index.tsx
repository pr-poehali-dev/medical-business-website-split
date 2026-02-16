import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row font-montserrat overflow-hidden">
      {/* Левая половина — Собственники */}
      <div
        className={`relative flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-16 transition-all duration-700 ease-out cursor-pointer group ${
          hoveredSide === "left"
            ? "md:flex-[1.15]"
            : hoveredSide === "right"
            ? "md:flex-[0.85]"
            : "md:flex-1"
        }`}
        style={{ backgroundColor: "#0f172a" }}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-md text-center space-y-8">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Icon name="TrendingUp" size={28} className="text-white/80" />
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-6">
              Собственникам клиник
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight">
              Ваш бизнес лечит всех,
              <br />
              <span className="font-semibold">кроме вашего кошелька?</span>
            </h1>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto">
              Настроим систему, которая приносит прибыль, а не головную боль
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.65s" }}>
            <button className="mt-4 inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide rounded-full transition-all duration-500 hover:bg-white hover:text-[#0f172a] hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group/btn">
              <span>Узнать как</span>
              <Icon
                name="ArrowRight"
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="flex items-center gap-4 text-white/20 text-xs tracking-wider">
            <div className="w-8 h-px bg-white/20" />
            <span>Частные клиники и МЦ</span>
            <div className="w-8 h-px bg-white/20" />
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-300/30 to-transparent" />
      <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent" />

      {/* Правая половина — Врачи */}
      <div
        className={`relative flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-16 transition-all duration-700 ease-out cursor-pointer group ${
          hoveredSide === "right"
            ? "md:flex-[1.15]"
            : hoveredSide === "left"
            ? "md:flex-[0.85]"
            : "md:flex-1"
        }`}
        style={{ backgroundColor: "#fafafa" }}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-black/[0.02] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-md text-center space-y-8">
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-black/[0.05] flex items-center justify-center">
              <Icon name="Star" size={28} className="text-black/60" />
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <p className="text-black/30 text-xs font-medium tracking-[0.3em] uppercase mb-6">
              Врачам
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h1 className="text-[#0f172a] text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight">
              Ты лечишь людей.
              <br />
              <span className="font-semibold">Кто вылечит твою карьеру?</span>
            </h1>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.55s" }}>
            <p className="text-black/40 text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto">
              Сделаем из тебя бренд, к которому выстраиваются очереди
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <button className="mt-4 inline-flex items-center gap-3 px-8 py-4 border border-black/15 text-[#0f172a] text-sm font-medium tracking-wide rounded-full transition-all duration-500 hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] hover:shadow-[0_0_40px_rgba(15,23,42,0.15)] group/btn">
              <span>Узнать как</span>
              <Icon
                name="ArrowRight"
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="flex items-center gap-4 text-black/20 text-xs tracking-wider">
            <div className="w-8 h-px bg-black/20" />
            <span>Личный бренд врача</span>
            <div className="w-8 h-px bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

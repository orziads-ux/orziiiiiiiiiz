import DecorativeIcon from '../DecorativeIcons';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image — uses <img> with object-fit for crisp scaling on all DPIs */}
      <img
        src="/header.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          filter: 'contrast(1.02) saturate(1.05)',
        }}
        loading="eager"
        fetchPriority="high"
        draggable={false}
      />

      {/* Color overlay matching original gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(36, 50, 71, 0.5) 0%, rgba(36, 50, 71, 0.3) 100%)',
        }}
      />

      {/* Bottom fade into page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e7ddcc]" />

      <DecorativeIcon icon="crown" position={{ top: '15%', left: '10%' }} delay={0} />
      <DecorativeIcon icon="diamond" position={{ top: '25%', right: '12%' }} delay={1.5} />
      <DecorativeIcon icon="sparkles" position={{ bottom: '30%', left: '8%' }} delay={3} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-16" style={{ lineHeight: '2.2' }}>
          .خالِد. راقٍ. أصيلْ
        </h1>

        <p className="text-lg md:text-2xl text-white font-light" style={{ lineHeight: '2.4' }}>
          من أصالة ورقيّ الماضي
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

import { tickerItems } from '../data/profile';

export const Ticker = () => {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-b border-white/10 bg-ink-950/80">
      <div className="flex w-max animate-marquee whitespace-nowrap py-2.5">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="px-5 text-[11px] uppercase tracking-[0.22em] text-mist-400"
          >
            {item}
            <span className="ml-5 text-white/20">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

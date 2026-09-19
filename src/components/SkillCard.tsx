import type { SkillCategory } from '../types';
import { Smartphone, Layers3, Server, Wrench } from 'lucide-react';

const icons = {
  mobile: Smartphone,
  state: Layers3,
  backend: Server,
  other: Wrench,
};

type SkillCardProps = {
  category: SkillCategory;
};

export const SkillCard = ({ category }: SkillCardProps) => {
  const Icon = icons[category.id as keyof typeof icons] ?? Wrench;

  return (
    <article className="rounded-2xl border border-white/10 bg-ink-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-accent-soft">
        <Icon size={18} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      <ul className="mt-4 space-y-2">
        {category.items.map((item) => (
          <li key={item.name} className="text-sm text-mist-400">
            {item.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

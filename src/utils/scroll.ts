export const scrollToId = (id: string) => {
  const target = document.getElementById(id.replace('#', ''));
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

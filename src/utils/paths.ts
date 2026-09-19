export const withBase = (path: string) => {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
};

export const isPlaceholderValue = (value?: string) =>
  Boolean(value && value.includes('[') && value.includes(']'));

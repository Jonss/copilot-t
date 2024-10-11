const getNumberFromString = (s: string | null) => {
  if (!s) return 0;
  const match = s.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

export { getNumberFromString };

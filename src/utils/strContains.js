export const strContains = (text, search) => {
  if (!search) return true; // pusty search zawsze pasuje
  if (!text) return false;  // pusty tekst nie zawiera nic

  return text.toLowerCase().includes(search.toLowerCase());
};


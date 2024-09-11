export const lcStorage = {
  isNull: (key: string) => localStorage.getItem(key) === null,
  get: (key: string) => {
    if (localStorage.getItem(key))
      return JSON.parse(localStorage.getItem(key) as string);
  },
  set: (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

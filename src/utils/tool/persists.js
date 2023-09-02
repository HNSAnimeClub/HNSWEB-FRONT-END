export const storageEffect =
  (key, type = "localStorage") =>
  ({ setSelf, onSet }) => {
    const savedValue =
      type === "localStorage"
        ? localStorage.getItem(key)
        : sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue) => {
      type === "localStorage"
        ? localStorage.setItem(key, JSON.stringify(newValue))
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

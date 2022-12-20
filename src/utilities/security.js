export let token;

export const setToken = (value) => (token = value);
export const getToken = () => {
  let localToken = localStorage.getItem("token");
  if (!localToken) return null;
  localToken = `Bearer ${localToken.trim()}`;
  return localToken;
};

export let token;

export const setToken = (value) => (token = value);
export const getToken = () => {
  let localToken = localStorage.getItem("token");
  if (!localToken) localToken = localStorage.setItem("token", "");
  localToken = `Bearer ${localToken}`;
  return localToken;
};

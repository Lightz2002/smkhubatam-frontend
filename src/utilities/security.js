export let token;

export const setToken = (value) => (token = `Bearer ${value}`);
export const getToken = () => localStorage.getItem("access_token");

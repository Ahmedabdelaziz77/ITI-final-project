export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
export const generateRandomId = () => {
  return String(Math.floor(Math.random() * 1000000) + Date.now());
};

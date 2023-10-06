export const pages = {
  home: '/',
  cosmetics: '/cosmetics',
  cosmeticsID: ':cosmeticID',
};

export const cosmeticsPerPage = 20;

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDate = (date: string | number | Date) => {
  const d = new Date(date);
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
};

export const getPages = (page: number, itemsPerPage: number, array: any[]) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return array.slice(start, end);
};

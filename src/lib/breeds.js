export const fetchBreeds = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  return Object.keys(data.message);
};

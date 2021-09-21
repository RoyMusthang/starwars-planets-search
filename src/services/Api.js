const API = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(url);
  const results = await request.json();
  return results;
};

export default API;

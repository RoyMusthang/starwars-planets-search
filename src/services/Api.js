const API = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(url);
  const results = await request.json();
  console.log(results.results);
  return results.results;
};

export default API;

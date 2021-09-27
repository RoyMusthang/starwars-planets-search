async function fetchAPI() {
  const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
  const result = await res.json();
  return result;
}

export default fetchAPI;

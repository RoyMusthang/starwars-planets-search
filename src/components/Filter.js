import React, { useContext } from 'react';
import MyContext from '../context/Context';

const Filter = () => {
  const { filters: { filterByName: { name } },
    setName } = useContext(MyContext);

  return (
    <form>
      <input
        value={ name }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setName({
          filters: {
            ...name.filters,
            filterByName: {
              name: value,
            } },
        }) }
      />
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="text"
        data-testid="value-filter"
      />

      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
};

export default Filter;

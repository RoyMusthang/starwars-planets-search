import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

export default function FilterForm() {
  const [params, setParams] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const [select, setSelect] = useState({
    column: 'population', comparison: 'maior que', value: '' });
  const { filters, setFilter } = useContext(AppContext);
  const { filterByNumericValues } = filters;

  const handleNameChange = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filterByName: { name: value.toLowerCase() },
    });
  };

  const handleColumnChange = ({ target: { value } }) => {
    setSelect({
      ...select,
      column: value,
    });
  };

  const handleCompChange = ({ target: { value } }) => {
    setSelect({
      ...select,
      comparison: value,
    });
  };

  const handleChange = ({ target: { value } }) => {
    setSelect({
      ...select,
      value,
    });
  };

  const checkFilter = () => {
    setParams(params.filter((p) => p !== select.column));
  };

  const handleClick = () => {
    checkFilter();
    setFilter({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, { ...select }],
    });
  };

  return (
    <form className="form-row">
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          onChange={ handleNameChange }
          data-testid="name-filter"
        />
      </label>
      <select data-testid="column-filter" onChange={ handleColumnChange }>
        {params.map((param) => <option key={ param }>{param}</option>)}
      </select>
      <select data-testid="comparison-filter" onChange={ handleCompChange }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="numerical">
        Valor:
        <input
          id="numerical"
          type="number"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const { data, filters } = useContext(AppContext);
  const [planets, setPlanets] = useState(data);
  const keys = Object.keys(data[0]).filter((name) => name !== 'residents');
  const { filterByName: { name } } = filters;
  const { filterByNumericValues } = filters;

  const filterPlanets = () => {
    const comps = {
      'maior que': (coluna, valor) => Number(coluna) > Number(valor),
      'menor que': (coluna, valor) => Number(coluna) < Number(valor),
      'igual a': (coluna, valor) => Number(coluna) === Number(valor),
    };

    if (!filterByNumericValues.length) {
      setPlanets(data);
    }
    if (filterByNumericValues.length === 1) {
      filterByNumericValues
        .forEach(({ column, comparison, value }) => setPlanets(
          data.filter((dat) => comps[comparison](dat[column], value)),
        ));
    } else {
      filterByNumericValues.forEach(({ column, comparison, value }) => setPlanets(
        planets.filter((p) => comps[comparison](p[column], value)),
      ));
    }
    if (name) {
      setPlanets(planets.filter((planet) => (planet.name).toLowerCase().includes(name)));
    }
  };

  useEffect(filterPlanets, [filters]);
  return (
    <div className="table-responsive-sm">
      <table className="table table-sm">
        <thead>
          <tr className="table-info">
            {keys.map((item, index) => <th key={ index }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
              {
                keys.map((key) => (
                  <td key={ Math.random() }>{planet[key]}</td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

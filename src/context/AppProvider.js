import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [data, setPlanetData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  return (
    <AppContext.Provider
      value={ {
        data,
        setPlanetData,
        filters,
        setFilter,
        planets,
        setPlanets } }
    >
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default AppProvider;

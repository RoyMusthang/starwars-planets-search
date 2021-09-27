import React, { useEffect, useContext, useState } from 'react';
import Table from '../components/Table';
import AppContext from '../context/AppContext';
import fetchAPI from '../services';
import FilterForm from '../components/FilterForm';

export default function MainPage() {
  const { setPlanetData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const populateData = async () => {
      const data = await fetchAPI();
      setPlanetData(data.results);
      await setLoading(false);
    };
    populateData();
  }, [setPlanetData]);

  return (
    <section>
      <FilterForm />
      {!loading && <Table />}
    </section>
  );
}

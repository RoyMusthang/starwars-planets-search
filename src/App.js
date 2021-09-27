import React from 'react';
import AppProvider from './context/AppProvider';
import MainPage from './pages/MainPage';

function App() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}

export default App;

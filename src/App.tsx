import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import SearchForm from './features/SearchForm';
import AvailableHotel from './features/AvailableHotel';
import HolidayProvider from './context/holidayContext';


function App() {
  return (
    <HolidayProvider>
      <Header title='Your best days with...' />
      <section className='main'>
        <SearchForm />
        <hr />
        <AvailableHotel />
      </section>
    </HolidayProvider>
  );
}

export default App;

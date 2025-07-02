import React from 'react';
import './assets/styles/tailwind.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <div className='m-0 p-0' style={{ overflow: 'hidden', backgroundColor: '#faf1f5' }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;

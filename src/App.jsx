import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <div className='m-0 p-0' style={{ overflow: 'hidden', backgroundColor: '#faf1f5' }}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;

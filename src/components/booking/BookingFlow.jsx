import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ServiceSelection from './ServiceSelection';
import DateTimeSelection from './DateTimeSelection';
import Payment from './Payment';
import Confirmation from './Confirmation';

const BookingFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedService = queryParams.get('service');

  const services = [
    { name: 'Haircuts', icon: '✂️' },
    { name: 'Make Up', icon: '💄' },
    { name: 'Shaving', icon: '🪒' },
    { name: 'Massage', icon: '💧' },
    { name: 'Hair Styling', icon: '💇‍♀️' },
  ];

  const getStepFromPath = () => {
    const path = location.pathname;
    if (path.endsWith('/booking/service')) return 1;
    if (path.endsWith('/booking/datetime')) return 2;
    if (path.endsWith('/booking/payment')) return 3;
    if (path.endsWith('/booking/confirmation')) return 4;
    return 0;
  };

  const step = getStepFromPath();

  const nextStep = (nextPath) => {
    navigate(nextPath);
  };

  const prevStep = (prevPath) => {
    navigate(prevPath);
  };


  switch (step) {
    case 1:
      return <ServiceSelection selectedService={selectedService} services={services} nextStep={(nextPath) => nextStep(nextPath)} />;
    case 2:
      return <DateTimeSelection nextStep={(nextPath) => nextStep(nextPath)} prevStep={(prevPath) => prevStep(prevPath)} />;
    case 3:
      return <Payment nextStep={(nextPath) => nextStep(nextPath)} prevStep={(prevPath) => prevStep(prevPath)} />;
    case 4:
      return <Confirmation prevStep={(prevPath) => prevStep(prevPath)} />;
    default:
      return <div>Error</div>;
  }
};

export default BookingFlow;

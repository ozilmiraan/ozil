import React from 'react';

const Confirmation = ({ prevStep }) => {
  return (
    <div>
      <h3>Confirmation</h3>
      {/* Confirmation and receipt details will go here */}
       <button onClick={() => prevStep('/booking/payment')}>Previous</button>
    </div>
  );
};

export default Confirmation;

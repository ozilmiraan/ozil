import React, { useState } from 'react';

const Payment = ({ nextStep, prevStep }) => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        // Simulate payment processing
        setTimeout(() => {
            setPaymentSuccess(true);
        }, 1000);
    };

    const handleNext = () => {
        if (paymentSuccess) {
            nextStep('/booking/confirmation');
        } else {
            alert('Please complete the payment first.');
        }
    };

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-2xl font-bold mb-6 text-center">Payment</h3>
        {paymentSuccess ? (
            <div className="text-center text-green-500 font-semibold mb-4">Payment Successful!</div>
        ) : (
            <div className="text-center mb-4">
                <button onClick={handlePayment} className="bg-accent text-white py-2 px-6 rounded hover:bg-accent-dark">Simulate Payment</button>
            </div>
        )}
        <div className="flex justify-between mt-6">
            <button onClick={() => prevStep('/booking/datetime')} className="bg-gray-300 text-gray-700 py-2 px-6 rounded hover:bg-gray-400">Previous</button>
            <button onClick={handleNext} className="bg-primary text-white py-2 px-6 rounded hover:bg-primary-dark">Next</button>
        </div>
    </div>
  );
};

export default Payment;

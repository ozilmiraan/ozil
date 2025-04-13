import React, { useState } from 'react';

const DateTimeSelection = ({ nextStep, prevStep }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleNext = () => {
        if (selectedDate && selectedTime) {
            nextStep(`/booking/payment?date=${selectedDate}&time=${selectedTime}`);
        } else {
            alert('Please select a date and time');
        }
    };

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-2xl font-bold mb-6 text-center">Select Date and Time</h3>
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
                <input type="date" id="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedDate} onChange={handleDateChange} />
            </div>
            <div className="mb-4">
                <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time:</label>
                <input type="time" id="time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedTime} onChange={handleTimeChange} />
            </div>
        </div>
        <div className="flex justify-between mt-6">
            <button onClick={() => prevStep('/booking/service')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Previous</button>
            <button onClick={handleNext} className="bg-primary text-white py-2 px-6 rounded hover:bg-primary-dark">Next</button>
        </div>
    </div>
  );
};

export default DateTimeSelection;

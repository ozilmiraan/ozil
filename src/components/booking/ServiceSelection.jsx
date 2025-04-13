import React, { useState } from 'react';
import ServiceList from '../ServiceList';

const ServiceSelection = ({ nextStep, selectedService, services }) => {
    const [selectedServices, setSelectedServices] = useState(selectedService ? [selectedService] : []);

    const handleServiceChange = (service) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleNext = () => {
        if (selectedServices.length > 0) {
            nextStep(`/booking/datetime?services=${JSON.stringify(selectedServices)}`);
        } else {
            alert('Please select at least one service');
        }
    };

    const packageServices = [
        {
            name: "Bridal Makeup",
            image: "https://placekitten.com/200/200",
            description: "Get the perfect look for your special day."
        },
        {
            name: "Party Makeup",
            image: "https://placekitten.com/201/201",
            description: "Look your best for any party or event."
        },
        {
            name: "Photoshoot Makeup",
            image: "https://placekitten.com/202/202",
            description: "Professional makeup for your photoshoot."
        }
    ];

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-2xl font-bold mb-6 text-center">Select a Service</h3>
        <h4 className="text-xl font-semibold mb-4 text-center">Individual Services</h4>
        <ServiceList services={services} />
        <h4 className="text-xl font-semibold mb-4 mt-8 text-center">Packages</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { packageServices.map((service) => (
                <div key={service.name} className={`bg-white shadow rounded p-4 ${selectedServices.includes(service.name) ? 'border-2 border-accent' : ''}`}>
                    <img src={service.image} alt={service.name} className="rounded w-full h-48 object-cover mb-4" />
                    <h4 className="text-xl font-semibold mb-2 text-center">{service.name}</h4>
                    <p className="text-center mb-4">{service.description}</p>
                    <div className="flex justify-center">
                         <button
                            className={`bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark ${selectedServices.includes(service.name) ? 'opacity-100' : 'opacity-70'}`}
                            onClick={() => handleServiceChange(service.name)}
                        >
                            {selectedServices.includes(service.name) ? 'Selected' : 'Select'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex justify-center mt-6">
            <button onClick={handleNext} className="bg-primary text-white py-2 px-6 rounded hover:bg-primary-dark">Next</button>
        </div>
    </div>
  );
};

export default ServiceSelection;

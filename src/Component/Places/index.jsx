import React from 'react'
import { useState } from "react"
function Places() {

    const [selectedCity, setSelectedCity] = useState('Ahmedabad');
    const locations = {
        Ahmedabad: [
            "Packers & Movers In Ahmedabad",
            "Packers & Movers In Maninagar",
            "Packers & Movers In Sarkhej",
            "Packers & Movers In C G Road",
            "Packers & Movers In Chandkheda",
            "Packers & Movers In Bopal",
            "Packers & Movers In Ellis Bridge",
            "Packers & Movers In Gota",
            "Packers & Movers In Jodhpur",
            "Packers & Movers In Ashram Road",
            "Packers & Movers In Motera",
            "Packers & Movers In Naranpura",
            "Packers & Movers In Naroda",
            "Packers & Movers In Naroda Road",
            "Packers & Movers In Narol",
            "Packers & Movers In Nikol",
            "Packers & Movers In Odhav",
            "Packers & Movers In Raipur",
            "Packers & Movers In Satellite",
            "Packers & Movers In Thaltej",
            "Packers & Movers In Thaltej Road"
        ],
        Vadodara: [
            "Packers & Movers In Vadodara",
            "Packers & Movers In Alkapuri",
            "Packers & Movers In Gorwa",
            "Packers & Movers In Fathegunj",
            "Packers & Movers In Gotri",
            "Packers & Movers In Chhani",
            "Packers & Movers In Diwalipura",
            "Packers & Movers In New Sama",
            "Packers & Movers In Akshar Chowk",
            "Packers & Movers In Sama Road",
            "Packers & Movers In Atladara",
            "Packers & Movers In Savali",
            "Packers & Movers In Karelibaug",
            "Packers & Movers In Waghodia",
            "Packers & Movers In Nizampura",
            "Packers & Movers In New VIP Rd",
            "Packers & Movers In ONGC",
            "Packers & Movers In Amit Nagar",
            "Packers & Movers In Kalali",
            "Packers & Movers In Old Padra",
            "Packers & Movers In Vasna",
            "Packers & Movers In Bhayli",
            "Packers & Movers In Op Road",
            "Packers & Movers In Sayajigunj",
            "Packers & Movers In Kala Ghoda",
            "Packers & Movers In Ajwa Road",
            "Packers & Movers In Sardar Estate",
            "Packers & Movers In Parivar",
            "Packers & Movers In Raopura",
            "Packers & Movers In Mandvi",
            "Packers & Movers In Lalbaugh"
        ],
        Gandhinagar: [
            "Packers & Movers In Gandhinagar",
            "Packers & Movers In Sector 30",
            "Packers & Movers In Sector 6",
            "Packers & Movers In Sector 7",
            "Packers & Movers In Sector 8",
            "Packers & Movers In Sector 9",
            "Packers & Movers In Adalaj",
            "Packers & Movers In Ambapur",
            "Packers & Movers In BSF",
            "Packers & Movers In Chandrala",
            "Packers & Movers In CRPF G Nagar",
            "Packers & Movers In Dolarana Vasna",
            "Packers & Movers In Gujrat HighCourt"
        ]
    };

    return (
        <>

            <div className="p-4">
                <div className="flex justify-center space-x-4 mb-4">
                    {Object.keys(locations).map(city => (
                        <button
                            key={city}
                            className={`px-4 py-2 my-5 rounded ${selectedCity === city ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setSelectedCity(city)}
                        >
                            {city}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {locations[selectedCity].map((location, index) => (
                        <div key={index} className="p-4 bg-backgroundGrey rounded shadow">
                            {location}
                        </div>
                    ))}
                </div>
            </div>

        </>


    );
}

export default Places
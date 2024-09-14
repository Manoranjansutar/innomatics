import React, { useState, useEffect } from 'react';
import background from './../assets/background-1.png';
import shap from './../assets/Shap.png';
import highlight from './../assets/Highlight_05.png';
import { FaSearch } from 'react-icons/fa';
import countryData from './../assets/searchData.json';


const Home = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const filteredSuggestions = countryData.filter(
        (item) =>
          item.country.toLowerCase().includes(query.toLowerCase()) ||
          item.capital.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className='relative'>
        <h1 className='text-6xl jost text-center flex gap-4 items-center'>
          <img src={highlight} alt="" className='absolute w-12 bottom-10 -left-12' />
          Your Global Navigator
          <img src={shap} alt="" className='w-20 animate-pulse' />
        </h1>
      </div>
      <p className='text-xl text-gray-400'>Search countries and states effortlessly to uncover new places</p>
      <div className='mt-10 flex justify-between items-center border border-black w-[500px] py-1 rounded-md px-1 relative'>
        <input
          type="text"
          className='outline-none bg-transparent w-[400px] p-2'
          placeholder='Search for a country, capital...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='bg-black text-white px-4 py-2 rounded-md'>
          <FaSearch />
        </button>
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-transparent border rounded-lg shadow-lg mt-1 top-full left-0">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setQuery(item.country)}
              >
                {item.country} - {item.capital}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;


import React from "react";
import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import { IoSearch } from "react-icons/io5";
import Header from "./Header";

const Countries = () => {
  //Manage state

  const [countries, setCountries] = useState([]);
  const regions = [
    {
      name: "Africa",
    },
    {
      name: "America",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Fetch all countries data
   */
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");

        if(!res.ok){
          <h1>Page not found</h1>
        }else{
          const data = await res.json();
          setCountries(data);
        }
        
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);
  useEffect(()=>{
    document.title= `Showing All Countries`;

  },[]);


    const filterByRegions = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();

      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  };

  /**Handle filterbyRegion on form submit function */

  const handleFilterByRegions = (e) => {
    e.preventDefault();
    filterByRegions();
  };
  /**
   * Search Function to search through api
   *
   */
  const searchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchTerm}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      <h1> Eroro</h1>
      console.error(err);
    }
  };

  /**
   * function to handle search
   */

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry();
  };

  /**
   * Filter through API by Regions
   */

 

  return (
    <div className="dark:bg-gray-800">
     <Header/>
      {!countries ? (
        <h1 className="md:h-64 flex items-center dark:bg-gray-800 dark:text-white  justify-center">
          Loading...
        </h1>
      ) : (
        <div className="container mx-auto p-8  dark:bg-gray-800 dark:text-white ">
          {/**forms */}
          
          <div className=" flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
         
            <form
              autoComplete="off"
              className="search max-w-4xl md:flex-1 "
              onSubmit={handleSearch}
            ><div className="flex flex-row items-center">
<IoSearch className="-mr-5 z-index:10" />
              <input
                type="text"
                placeholder="Search for a country by its name"
                name="search"
                id="search"
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none dark:text-gray-400 duration-200 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all"
              />
            </div>
               
            </form>

            <form onSubmit={handleFilterByRegions}>
              <select
                name="filter-by-region"
                id="filter-by-region"
                value={regions.name}
                onChange={(e) => filterByRegions(e.target.value)}
                className="py-3 px-4 shadow text-gray-600 rounded outline-none w-52 text-gray-800 dark:text-gray-400 w-full dark:bg-gray-800 dark:bg-focus-700"
              >
                {/**get Regions from the regions array */}
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {countries.map((country) => (
              <CountryCard key={country.name.common} {...country} />
            ))}
          </div>
        </div>
      )}
   </ div>
  );
};

export default Countries;

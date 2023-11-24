import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (err) {
        console.error(err);
      }
    };

    getCountryDetails();
  }, [name]);

  /**Dislay country name on titlebar */
  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);
  return (
    <div className="dark:bg-gray-800">
      <div className="details_section p-8 md:py-0 max-w-7xl mx-auto dark:bg-gray-800 dark:text-white h-screen ">
        <Link
          to="/"
          className="inline-block mt-8 bg-white py-3 px-5  rounded shadow text-gray-700 hover:bg-gray-200 gap-8 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
        >
          &larr; Back
        </Link>
        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 grid-cols-2  mt-40  items-center  "
          >
            <div className="card_img w-full">
              <img
                src={item.flags.svg}
                alt={item.name.common}
                className=" w-full md:h-72"
              />
            </div>
            <div className="card_content">
              <h1 className="font-bold text-gray-900 text-xl lg:text-3xl mb-8 dark:text-white">
                {item.name.official}
              </h1>
              <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()} </li>
                <li>Region: {item.region} </li>
                <li>Subregion: {item.subregion} </li>
              </ul>

              {
                /**Show borders (array) if it exist */
                item.borders && (
                  <div className="flex flex-row gap-2 justify-start items-center gap-5">
                    <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                      Borders:{" "}
                    </h3>

                    {item.borders.map((border, index) => (
                      <p className="bg-white p-2 rounded text-xz tracking-wide shadow dark:bg-gray dark:gray-800 text-gray-700">
                        {border}
                      </p>
                    ))}
                  </div>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;

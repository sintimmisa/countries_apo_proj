import React from "react";
import { useState, useEffect } from "react";

const Countries = () => {
  //Manage state

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);
  return <div>{countries.length}</div>;
};

export default Countries;

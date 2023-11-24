import React from 'react'
import { Link } from 'react-router-dom';

const CountryCard = ({flags, name,population, subregion, region,alt}) => {
  return (
    <Link to={`/${name.common}`}>
  <div class="card bg-white hover:bg-gray-200 {/*dark:bg-gray-800 dark:hover:bg-gray-700*/} transition-all duration-200 rounded-lg shadow overflow-hidden">
      <img src={flags.svg} alt={alt} className='img w-full object-cover'/>
      <div className="card_body py-5 px-5">
      <h2 className="text-lg font-extrabold mb-2 {/*dark:text-white*/}">
        {name.common}
      </h2>
      
        <p className="{/*dark:text-gray-400*/}">Population: { population.toLocaleString()}</p>
        <p>Region: { region}</p>
        <p>Subregion: { subregion}</p>
        </div>
    </div>
    </Link>
  )
}

export default CountryCard;
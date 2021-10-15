import React, { useState } from 'react';
import { graphql, useFragment } from 'react-relay';
import CityComponent from './CityComponent';

const CountryComponent = (props) => {
  const [citiesList, showCitiesList] = useState(false);
  // Using fragment to get data in current component only
  const countriesAndCitiesFragment = graphql`
    fragment CountryComponent_name on Country {
      name
      cities {
        ...CityComponent_name
      }
    }
  `;
  // Toggling cities list on click
  const handleClick = () => {
    showCitiesList(!citiesList);
  }
  const country = useFragment(countriesAndCitiesFragment, props.country);
  return (
    <li key={country.id}>
      <div onClick={handleClick}>
        {country.name}
      </div>
      {citiesList &&
        (<ul>
          {country.cities.map((city) => (
            <CityComponent city={city} />
          ))}
        </ul>)
      }
    </li>
  );
}

export default CountryComponent;
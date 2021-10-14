import React from 'react';
import { graphql, useFragment } from 'react-relay';

const CountriesComponent = (props: Props) => {
  const countriesAndCitiesFragment = graphql`
    fragment CountriesComponent_name on Country {
      name
      id
    }
  `;
  const country = useFragment(countriesAndCitiesFragment, props.country);
  return (
    <li>
      {country.name}
    </li>
  );
}

export default CountriesComponent;
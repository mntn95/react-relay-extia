import React from 'react';
import { graphql, useFragment } from 'react-relay';

const CityComponent = (props) => {
  const CityNameFragment = graphql`
    fragment CityComponent_name on City {
      name
      id
    }
  `;
  const city = useFragment(CityNameFragment, props.city);
  return (
    <li key={city.id}>
        {city.name}
    </li>
  );
}

export default CityComponent;
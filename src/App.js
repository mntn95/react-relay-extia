import React, {useState, useEffect} from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

const App = () => {
  const [countryList, setCountryList] = useState(null);

  // component did mount equivalent
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
    query AllCountriesWithCitiesQuery{
      countries {
        name
        cities {
          name
        }
      }
    }
    `).then(response => {
      if (!isMounted) {
        return;
      }
      const {countries} = response.data;
      console.log(countries);
      setCountryList(countries);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    }
  }, [fetchGraphQL]);

  return (
    <div className="App">
      <header className="App-header">
          {countryList != null ?
          <ul>
            {countryList.forEach(country => {
              console.log(country);
            })}
          </ul> : "Awaiting response..."}
      </header>
    </div>
  );
}

export default App;

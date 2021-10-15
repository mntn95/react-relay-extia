import React, { Suspense } from 'react';
import { graphql } from 'react-relay'
import './App.css';
import CountryComponent from './CountryComponent';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

// Defining Pre-loaded query
const PreLoadedQuery = graphql`
  query AppPreLoadedQuery {
    countries {
      id
      ...CountryComponent_name
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PreLoadedQuery, {});

const App = (props) => {
  // Calling query on load
  const data = usePreloadedQuery(PreLoadedQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {data.countries.map((country) => (
            <CountryComponent key={country.id} country={country} />
          ))}
        </ul>
      </header>
    </div>
  );
}

const AppRoot = (props) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
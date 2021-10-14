import React from 'react';
import { graphql } from 'react-relay'
import './App.css';
import CountriesComponent from './CountriesComponent';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

// Define a query
const PreLoadedQuery = graphql`
  query AppPreLoadedQuery {
    countries {
      ...CountriesComponent_name
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PreLoadedQuery, {});

const App = (props) => {
  const data = usePreloadedQuery(PreLoadedQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {data.countries.map((country) => (
            <CountriesComponent country={country} />
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
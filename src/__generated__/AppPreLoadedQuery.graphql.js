/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountriesComponent_name$ref = any;
export type AppPreLoadedQueryVariables = {||};
export type AppPreLoadedQueryResponse = {|
  +countries: $ReadOnlyArray<{|
    +$fragmentRefs: CountriesComponent_name$ref
  |}>
|};
export type AppPreLoadedQuery = {|
  variables: AppPreLoadedQueryVariables,
  response: AppPreLoadedQueryResponse,
|};
*/


/*
query AppPreLoadedQuery {
  countries {
    ...CountriesComponent_name
    id
  }
}

fragment CountriesComponent_name on Country {
  name
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPreLoadedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CountriesComponent_name"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPreLoadedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "63e28084811a6899ed72ec8d7c041149",
    "id": null,
    "metadata": {},
    "name": "AppPreLoadedQuery",
    "operationKind": "query",
    "text": "query AppPreLoadedQuery {\n  countries {\n    ...CountriesComponent_name\n    id\n  }\n}\n\nfragment CountriesComponent_name on Country {\n  name\n  id\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '6118d1d3c5cee3a72b1ac6ffce1d0c29';

module.exports = node;

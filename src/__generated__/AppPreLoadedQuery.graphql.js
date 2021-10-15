/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryComponent_name$ref = any;
export type AppPreLoadedQueryVariables = {||};
export type AppPreLoadedQueryResponse = {|
  +countries: $ReadOnlyArray<{|
    +id: string,
    +$fragmentRefs: CountryComponent_name$ref,
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
    id
    ...CountryComponent_name
  }
}

fragment CityComponent_name on City {
  name
  id
}

fragment CountryComponent_name on Country {
  name
  cities {
    ...CityComponent_name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
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
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CountryComponent_name"
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "City",
            "kind": "LinkedField",
            "name": "cities",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7417736a2081e384ac48df05fd397d2e",
    "id": null,
    "metadata": {},
    "name": "AppPreLoadedQuery",
    "operationKind": "query",
    "text": "query AppPreLoadedQuery {\n  countries {\n    id\n    ...CountryComponent_name\n  }\n}\n\nfragment CityComponent_name on City {\n  name\n  id\n}\n\nfragment CountryComponent_name on Country {\n  name\n  cities {\n    ...CityComponent_name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '362bee843c8424d7e5106608870e6a14';

module.exports = node;

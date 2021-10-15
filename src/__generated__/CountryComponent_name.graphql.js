/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CityComponent_name$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CountryComponent_name$ref: FragmentReference;
declare export opaque type CountryComponent_name$fragmentType: CountryComponent_name$ref;
export type CountryComponent_name = {|
  +name: string,
  +cities: ?$ReadOnlyArray<{|
    +$fragmentRefs: CityComponent_name$ref
  |}>,
  +$refType: CountryComponent_name$ref,
|};
export type CountryComponent_name$data = CountryComponent_name;
export type CountryComponent_name$key = {
  +$data?: CountryComponent_name$data,
  +$fragmentRefs: CountryComponent_name$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CountryComponent_name",
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
      "concreteType": "City",
      "kind": "LinkedField",
      "name": "cities",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CityComponent_name"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Country",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c279442f768e2127c06f45cb45a63338';

module.exports = node;

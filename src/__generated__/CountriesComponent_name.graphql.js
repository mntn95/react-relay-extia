/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CountriesComponent_name$ref: FragmentReference;
declare export opaque type CountriesComponent_name$fragmentType: CountriesComponent_name$ref;
export type CountriesComponent_name = {|
  +name: string,
  +id: string,
  +$refType: CountriesComponent_name$ref,
|};
export type CountriesComponent_name$data = CountriesComponent_name;
export type CountriesComponent_name$key = {
  +$data?: CountriesComponent_name$data,
  +$fragmentRefs: CountriesComponent_name$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CountriesComponent_name",
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
  "type": "Country",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '8105878ddaee8c91df3d6529e9bad43d';

module.exports = node;

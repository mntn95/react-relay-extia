/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CityComponent_name$ref: FragmentReference;
declare export opaque type CityComponent_name$fragmentType: CityComponent_name$ref;
export type CityComponent_name = {|
  +name: string,
  +id: string,
  +$refType: CityComponent_name$ref,
|};
export type CityComponent_name$data = CityComponent_name;
export type CityComponent_name$key = {
  +$data?: CityComponent_name$data,
  +$fragmentRefs: CityComponent_name$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CityComponent_name",
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
  "type": "City",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd9ea9da79fc0db38bcbcb56f589fb18d';

module.exports = node;

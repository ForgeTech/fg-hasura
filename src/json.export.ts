import * as color from './colors';
import * as world from './world';
import * as endfront from './endfront';
let mergedExports = { 
    ...color.default,
    ...world.default,
    ...endfront.default
};
// console.log( mergedExports );
export = mergedExports;
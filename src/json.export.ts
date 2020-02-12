import * as color from './colors';
import * as world from './world';
import * as endfront from './endfront';
import * as html from './html';
import * as css from './css';
let mergedExports = { 
    ...color.default,
    // ...world.default,
    // ...endfront.default,
    // ...css.default,
    // ...html.default
};
console.log( mergedExports );
export = mergedExports;
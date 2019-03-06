import * as colorSetsColors from './colorsets-colors';
import * as continentsCountriesLanguages from './continents-countries-languages';
import * as endfront from './endfront';
let mergedExports = { 
    ...colorSetsColors.default, 
    // ...continentsCountriesLanguages.default,
    ...endfront.default
};
// console.log( mergedExports );
export = mergedExports;
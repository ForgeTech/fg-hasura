import * as colorSetsColors from './colorsets-colors';
import * as continentsCountriesLanguages from './continents-countries-languages';
let mergedExports = { 
    ...colorSetsColors.default, 
    // ...continentsCountriesLanguages.default 
};
console.log( mergedExports );
export = mergedExports;
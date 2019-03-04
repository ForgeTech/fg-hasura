"use strict";
const tslib_1 = require("tslib");
const colorSetsColors = tslib_1.__importStar(require("./colorsets-colors"));
const continentsCountriesLanguages = tslib_1.__importStar(require("./continents-countries-languages"));
let mergedExports = Object.assign({}, colorSetsColors.default, continentsCountriesLanguages.default);
module.exports = mergedExports;

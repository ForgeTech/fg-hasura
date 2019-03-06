"use strict";
const tslib_1 = require("tslib");
const colorSetsColors = tslib_1.__importStar(require("./colorsets-colors"));
const endfront = tslib_1.__importStar(require("./endfront"));
let mergedExports = Object.assign({}, colorSetsColors.default, endfront.default);
module.exports = mergedExports;

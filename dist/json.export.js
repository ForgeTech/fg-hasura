"use strict";
const tslib_1 = require("tslib");
const color = tslib_1.__importStar(require("./colors"));
const world = tslib_1.__importStar(require("./world"));
const endfront = tslib_1.__importStar(require("./endfront"));
let mergedExports = Object.assign({}, color.default, world.default, endfront.default);
module.exports = mergedExports;

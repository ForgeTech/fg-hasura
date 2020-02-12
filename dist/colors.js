"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Colors-Object containing sets of Colors and ColorSets
const googleMaterialColors = require('./../node_modules/material-colors/dist/colors');
const css = require('./data/blee-colors/css');
const html = require('./data/blee-colors/html');
// const crayola = require('./data/blee-colors/').crayola;
const crayola1903 = require('./data/blee-colors/crayola1903');
const crayola48 = require('./data/blee-colors/crayola48');
const crayola64 = require('./data/blee-colors/crayola64');
// const crayola72 = require('./data/blee-colors/crayola72');
// const crayola96 = require('./data/blee-colors/crayola96');
const crayolaFluorescent = require('./data/blee-colors/crayolaFluorescent');
const crayolaModern = require('./data/blee-colors/crayolaModern');
const munsellCrayola = require('./data/blee-colors/munsellCrayola');
const pantone = require('./data/blee-colors/pantone');
const x11 = require('./data/blee-colors/x11');
const x11Grays = require('./data/blee-colors/x11Grays');
// Module for fromatting strings to camelCase
const camelCase = require('camelcase');
class ColorFormat {
    constructor(id = null, name = '') {
        this.id = id;
        this.name = name;
    }
}
let hex = new ColorFormat(0, 'HEX');
let hexa = new ColorFormat(1, 'HEXA');
let hsl = new ColorFormat(2, 'HSL');
let rgb = new ColorFormat(3, 'RGB');
let rgba = new ColorFormat(4, 'RGBA');
let colorFormatsToExport = [
    hex,
    hexa,
    hsl,
    rgb,
    rgba
];
class ColorGroup {
    constructor() {
        this.id = null;
        this.name = '';
        this.describtion = '';
    }
}
class Color {
    constructor() {
        this.id = null;
        this.name = '';
        this.value = '';
        this.colorGroup_id = null;
        this.colorFormat_id = null;
    }
}
class ColorSet {
    constructor() {
        this.id = null;
        this.name = '';
        this.colorGroup_id = null;
    }
}
class ColorToColorSet {
    constructor() {
        this.id = null;
        this.colorSet_id = null;
        this.color_id = null;
    }
}
class GradientType {
    constructor() {
        this.id = 0;
        this.name = '';
    }
}
class GradientStop {
    // gradient_id: 0;
    constructor() {
        this.id = 0;
        // this.color = ;
        this.alpha = 1;
        // gradie
    }
}
class Gradient {
    constructor() {
        this.id = 0;
        this.name = '';
    }
}
/**
 * Prepare Colors and ColorSets for use with jsonToGraphql importers by
 * assigning them with ids and additional meta-data
 *
 * @param colors Object containing sets of Colors and ColorSets
 */
function prepareColorSetsAndColors() {
    const materialColorsKey = '';
    let colorsToExport = [];
    let colorSetsToExport = [];
    let colorToColorSetToExport = [];
    let colorGroupsToExport = [];
    let colorSetIndex = 0;
    let colorIndex = 0;
    let ColorToColorSetIndex = 0;
    // Create colorGroups
    let googleMaterialColorGroup = new ColorGroup();
    googleMaterialColorGroup.id = 0;
    googleMaterialColorGroup.name = 'Google Material Colors';
    googleMaterialColorGroup.describtion = 'Colorsets defined by google material specification';
    colorGroupsToExport.push(googleMaterialColorGroup);
    let crayolaColorGroup = new ColorGroup();
    crayolaColorGroup.id = 1;
    crayolaColorGroup.name = 'Cryola Colors';
    crayolaColorGroup.describtion = 'Colorsets defined by cryola pencil and crayon producer';
    colorGroupsToExport.push(crayolaColorGroup);
    let pantoneColorGroup = new ColorGroup();
    pantoneColorGroup.id = 2;
    pantoneColorGroup.name = 'Pantone';
    pantoneColorGroup.describtion = 'Colorsets compatible with pantones probitaery color-space';
    colorGroupsToExport.push(pantoneColorGroup);
    let x11ColorGroup = new ColorGroup();
    x11ColorGroup.id = 3;
    x11ColorGroup.name = 'X11';
    x11ColorGroup.describtion = 'Colorsets defined for X window system (X11, or simply X), a windowing system for bitmap displays, common on unix-like operating systems.';
    colorGroupsToExport.push(x11ColorGroup);
    let htmlColorGroup = new ColorGroup();
    htmlColorGroup.id = 4;
    htmlColorGroup.name = 'Html4';
    htmlColorGroup.describtion = 'Colorset defined by HTML4';
    colorGroupsToExport.push(htmlColorGroup);
    let cssColorGroup = new ColorGroup();
    cssColorGroup.id = 5;
    cssColorGroup.name = 'HTML5';
    cssColorGroup.describtion = 'Colorset defined by HTML5/CSS3';
    colorGroupsToExport.push(cssColorGroup);
    // Add default colorSet for colors not contianed in a colorSet-Object
    let defaultColorSet = new ColorSet();
    defaultColorSet.id = colorSetIndex++;
    defaultColorSet.name = camelCase([materialColorsKey, 'default']);
    colorSetsToExport.push(defaultColorSet);
    function detectColorFormat(colorValue) {
        let detectedColorFormat_id = null;
        colorValue = colorValue.trim();
        // Should be hex
        if (colorValue.indexOf('#') !== -1
            && colorValue.length === 4
            || colorValue.length === 7) {
            detectedColorFormat_id = hex.id;
        }
        // Should be hex + alpha 
        else if (colorValue.indexOf('#') !== -1
            && colorValue.length === 5
            || colorValue.length === 8) {
            detectedColorFormat_id = hexa.id;
        }
        // Should be rgba. 
        // CAUTION - make sure to check for this before checking for rgb
        else if (colorValue.indexOf('rgba') !== -1) {
            detectedColorFormat_id = rgba.id;
        }
        // Should be rgb. 
        // CAUTION - make sure to check for this before checking for rgb
        else if (colorValue.indexOf('rgb') !== -1) {
            detectedColorFormat_id = rgb.id;
        }
        // Should be hsl
        else if (colorValue.indexOf('hsl') !== -1) {
            detectedColorFormat_id = hsl.id;
        }
        // Throw error as ids of null will lead to error on database-import
        else {
            throw new Error(`ERROR: colorsets-colors.ts - color-format mustn't be "null"!`);
        }
        return detectedColorFormat_id;
    }
    function createAndSetColorToExport(colorGroup, colorSet, key, value) {
        let color = new Color();
        color.id = colorIndex++;
        color.name = key;
        color.value = value;
        color.colorGroup_id = colorGroup.id;
        color.colorFormat_id = detectColorFormat(color.value);
        let colorToColorSet = new ColorToColorSet();
        colorToColorSet.id = ColorToColorSetIndex++;
        colorToColorSet.color_id = color.id;
        colorToColorSet.colorSet_id = colorSet.id;
        colorSet.colorGroup_id = colorGroup.id;
        colorToColorSetToExport.push(colorToColorSet);
        colorsToExport.push(color);
        return color;
    }
    // Import google-material colors
    for (let colorSetKey in googleMaterialColors) {
        // If iterated key contains object it is an instance of colorSet
        if (googleMaterialColors[colorSetKey] instanceof Object) {
            let colorSet = new ColorSet();
            colorSet.id = colorSetIndex++;
            colorSet.name = camelCase([materialColorsKey, ' ', colorSetKey]);
            for (let colorKey in googleMaterialColors[colorSetKey]) {
                createAndSetColorToExport(googleMaterialColorGroup, colorSet, camelCase([materialColorsKey, colorSetKey, ' ', colorKey]), googleMaterialColors[colorSetKey][colorKey]);
            }
            colorSetsToExport.push(colorSet);
        }
        // means iterated key only contains a single color to be added to defaultColorSet
        else {
            createAndSetColorToExport(googleMaterialColorGroup, defaultColorSet, camelCase([materialColorsKey, ' ', colorSetKey]), googleMaterialColors[colorSetKey]);
        }
    }
    // Add default colorSet for colors not contianed in a colorSet-Object
    let pantoneColorSet = new ColorSet();
    pantoneColorSet.id = colorSetIndex++;
    pantoneColorSet.name = camelCase(['Pantone']);
    colorSetsToExport.push(pantoneColorSet);
    for (let color in pantone) {
        createAndSetColorToExport(pantoneColorGroup, pantoneColorSet, color, pantone[color]);
    }
    let htmlColorSet = new ColorSet();
    htmlColorSet.id = colorSetIndex++;
    htmlColorSet.name = camelCase(['HTML4']);
    colorSetsToExport.push(htmlColorSet);
    for (let color in html) {
        createAndSetColorToExport(htmlColorGroup, htmlColorSet, color, html[color]);
    }
    let cssColorSet = new ColorSet();
    cssColorSet.id = colorSetIndex++;
    cssColorSet.name = camelCase(['HTML5']);
    colorSetsToExport.push(cssColorSet);
    for (let color in css) {
        createAndSetColorToExport(cssColorGroup, cssColorSet, color, css[color]);
    }
    let x11ColorSet = new ColorSet();
    x11ColorSet.id = colorSetIndex++;
    x11ColorSet.name = camelCase(['Colors']);
    colorSetsToExport.push(x11ColorSet);
    for (let color in x11) {
        createAndSetColorToExport(x11ColorGroup, x11ColorSet, color, x11[color]);
    }
    let x11GraysColorSet = new ColorSet();
    x11GraysColorSet.id = colorSetIndex++;
    x11GraysColorSet.name = camelCase(['Grays']);
    colorSetsToExport.push(x11GraysColorSet);
    for (let color in x11Grays) {
        createAndSetColorToExport(x11ColorGroup, x11GraysColorSet, color, x11Grays[color]);
    }
    let crayola1903ColorSet = new ColorSet();
    crayola1903ColorSet.id = colorSetIndex++;
    crayola1903ColorSet.name = camelCase(['Crayola 1903']);
    colorSetsToExport.push(crayola1903ColorSet);
    for (let color in crayola1903) {
        createAndSetColorToExport(crayolaColorGroup, crayola1903ColorSet, color, crayola1903[color]);
    }
    let crayola48ColorSet = new ColorSet();
    crayola48ColorSet.id = colorSetIndex++;
    crayola48ColorSet.name = camelCase(['Crayola 48']);
    colorSetsToExport.push(crayola48ColorSet);
    for (let color in crayola48) {
        createAndSetColorToExport(crayolaColorGroup, crayola48ColorSet, color, crayola48[color]);
    }
    let crayola64ColorSet = new ColorSet();
    crayola64ColorSet.id = colorSetIndex++;
    crayola64ColorSet.name = camelCase(['Crayola 64']);
    colorSetsToExport.push(crayola64ColorSet);
    for (let color in crayola64) {
        createAndSetColorToExport(crayolaColorGroup, crayola64ColorSet, color, crayola64[color]);
    }
    let crayolaFluorescentColorSet = new ColorSet();
    crayolaFluorescentColorSet.id = colorSetIndex++;
    crayolaFluorescentColorSet.name = camelCase(['Crayola Fluorescent']);
    colorSetsToExport.push(crayolaFluorescentColorSet);
    for (let color in crayolaFluorescent) {
        createAndSetColorToExport(crayolaColorGroup, crayolaFluorescentColorSet, color, crayolaFluorescent[color]);
    }
    let crayolaModernColorSet = new ColorSet();
    crayolaModernColorSet.id = colorSetIndex++;
    crayolaModernColorSet.name = camelCase(['Crayola Modern']);
    colorSetsToExport.push(crayolaModernColorSet);
    for (let color in crayolaModern) {
        createAndSetColorToExport(crayolaColorGroup, crayolaModernColorSet, color, crayolaModern[color]);
    }
    let munsellCrayolaColorSet = new ColorSet();
    munsellCrayolaColorSet.id = colorSetIndex++;
    munsellCrayolaColorSet.name = camelCase(['Munsell Crayola']);
    colorSetsToExport.push(munsellCrayolaColorSet);
    for (let color in munsellCrayola) {
        createAndSetColorToExport(crayolaColorGroup, munsellCrayolaColorSet, color, munsellCrayola[color]);
    }
    return {
        color: colorsToExport,
        colorSet: colorSetsToExport,
        colorToColorSet: colorToColorSetToExport,
        colorGroup: colorGroupsToExport,
        colorFormat: colorFormatsToExport
    };
}
exports.default = prepareColorSetsAndColors();

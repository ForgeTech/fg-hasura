// Colors-Object containing sets of Colors and ColorSets
const googleMaterialColors = require('./../node_modules/material-colors/dist/colors');
// Module for fromatting strings to camelCase
const camelCase = require('camelcase');
class ColorFormat {
    id: Number | null;
    name: String;
    constructor( id: Number | null = null, name: String = ''){
        this.id = id;
        this.name = name;
    }
}
let hex = new ColorFormat( 0, 'HEX' );
let hexa = new ColorFormat( 1, 'HEXA' );
let hsl = new ColorFormat( 2, 'HSL' );
let rgb = new ColorFormat( 3, 'RGB' );
let rgba = new ColorFormat( 4, 'RGBA');
let colorFormatsToExport = [
    hex,
    hexa,
    hsl,
    rgb,
    rgba
];
class ColorGroup {
    id: Number | null;
    name: String;
    constructor(){
        this.id = null;
        this.name = '';
    }
}
class Color {
    id: Number | null;
    name: String;
    colorFormat_id: Number | null;
    colorGroup_id: Number | null;
    value: String;
    constructor(){
        this.id = null;
        this.name = '';
        this.value = '';
        this.colorGroup_id = null; 
        this.colorFormat_id = null;
    }
}
class ColorSet {
    id: Number | null;
    name: String;
    colorGroup_id: Number | null;
    constructor(){
        this.id = null;
        this.name = '';
        this.colorGroup_id = null; 
    }
}
class ColorToColorSet {
    id: Number | null;
    colorSet_id: Number | null;
    color_id: Number | null;
    constructor(){
        this.id = null;
        this.colorSet_id = null;
        this.color_id = null;
    }
}
class GradientType {
    id: Number | null;
    name: string;
    constructor(){
        this.id = 0;
        this.name = '';
    }
}
class GradientStop {
    id: Number | null;
    // color: Color | null;
    alpha: Number;
    // gradient_id: 0;
    constructor(){
        this.id = 0;
        // this.color = ;
        this.alpha = 1;
        // gradie
    }
}
class Gradient {
    id: Number | null;
    name: string;
    constructor(){
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
function prepareColorSetsAndColors(): any {
    const materialColorsKey: string = 'md'
    let colorsToExport: Color[] = [];
    let colorSetsToExport: ColorSet[] = [];
    let colorToColorSetToExport: ColorToColorSet[] = [];
    let colorGroupsToExport: ColorGroup[] = [];
    
    let colorSetIndex = 0;
    let colorIndex = 0;
    let ColorToColorSetIndex = 0;

    // Create colorGroup for google material
    let googleMaterialColorGroup = new ColorGroup();
    googleMaterialColorGroup.id = 1;
    googleMaterialColorGroup.name = 'Google Material'
    colorGroupsToExport.push( googleMaterialColorGroup );

    // Add default colorSet for colors not contianed in a colorSet-Object
    let defaultColorSet: ColorSet = new ColorSet();
    defaultColorSet.id = colorSetIndex++;
    defaultColorSet.name = camelCase( [ materialColorsKey, 'default' ] );
    colorSetsToExport.push(defaultColorSet);
    
    function detectColorFormat( colorValue: String ): Number | null {
        let detectedColorFormat_id: Number | null = null;
        colorValue = colorValue.trim();
        // Should be hex
        if( colorValue.indexOf('#') !== -1 
        && colorValue.length === 4 
        || colorValue.length === 7 ){
            detectedColorFormat_id = hex.id;
        }
        // Should be hex + alpha 
        else if ( colorValue.indexOf('#') !== -1 
        && colorValue.length === 5 
        || colorValue.length === 8 ){
            detectedColorFormat_id = hexa.id;
        }
        // Should be rgba. 
        // CAUTION - make sure to check for this before checking for rgb
        else if ( colorValue.indexOf( 'rgba' ) !== -1 ){
            detectedColorFormat_id = rgba.id;
        }
        // Should be rgb. 
        // CAUTION - make sure to check for this before checking for rgb
        else if ( colorValue.indexOf( 'rgb' ) !== -1 ){
            detectedColorFormat_id = rgb.id;
        }
        // Should be hsl
        else if ( colorValue.indexOf( 'hsl' ) !== -1 ) {
            detectedColorFormat_id = hsl.id;
        }
        // Throw error as ids of null will lead to error on database-import
        else {
            throw new Error(`ERROR: colorsets-colors.ts - color-format mustn't be "null"!`);
        }
        return detectedColorFormat_id;        
    }

    function createAndSetColorToExport( colorGroup: ColorGroup, colorSet: ColorSet, key: string, value: any ): Color {
        let color: Color = new Color();
        color.id = colorIndex++;
        color.name = key;
        color.value = value;
        color.colorGroup_id = colorGroup.id;
        color.colorFormat_id = detectColorFormat( color.value );

        let colorToColorSet = new ColorToColorSet();
        colorToColorSet.id = ColorToColorSetIndex++;
        colorToColorSet.color_id = color.id;
        colorToColorSet.colorSet_id = colorSet.id;
        colorSet.colorGroup_id = colorGroup.id;
        
        colorToColorSetToExport.push( colorToColorSet );

        colorsToExport.push( color );
        return color;
    }
    // Import google-material colors
    for( let colorSetKey in googleMaterialColors ){
        // If iterated key contains object it is an instance of colorSet
        if ( googleMaterialColors[colorSetKey] instanceof Object ) {
            let colorSet: ColorSet = new ColorSet();
            colorSet.id = colorSetIndex++;
            colorSet.name = camelCase( [ materialColorsKey, colorSetKey] );
            for (let colorKey in googleMaterialColors[ colorSetKey ] ){
                createAndSetColorToExport( googleMaterialColorGroup, colorSet, camelCase( [ materialColorsKey, colorSetKey, colorKey ] ), googleMaterialColors[ colorSetKey ][ colorKey ] );
            }
            colorSetsToExport.push( colorSet );
        } 
        // means iterated key only contains a single color to be added to defaultColorSet
        else {
            createAndSetColorToExport( googleMaterialColorGroup, defaultColorSet, camelCase( [ materialColorsKey, colorSetKey ] ), googleMaterialColors[ colorSetKey ] )
        }
    }
    return {
        color: colorsToExport,
        colorSet: colorSetsToExport,
        colorToColorSet: colorToColorSetToExport,
        colorGroup: colorGroupsToExport,
        colorFormat: colorFormatsToExport
    }
}
export default prepareColorSetsAndColors();
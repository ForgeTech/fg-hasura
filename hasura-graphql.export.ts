import { format } from "url";

const colors = require('./node_modules/material-colors/dist/colors.json');
const camelCase = require('camelcase');
/**
 * The format of the of a colors value-string
 */
enum ColorFormat {
    NONE,
    HEX,
    HSL,
    RGB,
    RGBA
}
/**
 * Instance to store a color-value and it's meta-data
 */
class Color {
    id: Number;
    name: String;
    format: ColorFormat;
    value: String;
    colorSet_id: Number
    constructor(){
        this.id = -1;
        this.name = '';
        this.format = ColorFormat.NONE;
        this.value = '';
        this.colorSet_id = -1;
    }
}
/**
 * Instance to store a set of related/grouped color-instances
 */
class ColorSet {
    id: Number;
    name: String;
    constructor(){
        this.id = -1;
        this.name = '';
    }
}
/**
 * Prepare Colors and ColorSets for use with jsonToGraphql importers by
 * assigning them with ids and additional meta-data
 * 
 * @param colors Object containing sets of Colors and ColorSets
 */
function prepareColorsAndColorSets( colors: any  ): any {
    const materialColorsKey: string = 'md'
    let colorsToExport: Color[] = [];
    let colorSetsToExport: ColorSet[] = [];
    let colorSetIndex = 0;
    let colorIndex = 0;
    // Add default colorSet for colors not contianed in a colorSet-Object
    let defaultColorSet: ColorSet = new ColorSet();
    defaultColorSet.id = colorSetIndex++;
    defaultColorSet.name = camelCase( [ materialColorsKey, 'default' ] );
    colorSetsToExport.push(defaultColorSet);
    /**
     * Create color-object and add it to colorsToExport-array
     * @param name
     * @param value 
     */
    function createAndSetColorToExport( colorSet_id: Number, key: string, value: any ): Color {
        let color: Color = new Color();
        color.id = colorIndex++;
        color.name = key;
        color.value = value;
        color.colorSet_id = colorSet_id;
        colorsToExport.push( color );
        return color;
    }
    // Iterate all keys available on color-object and transform them into
    // color- and colorSet-instances
    for( let colorSetKey in colors ){
        // If iterated key contains object it is an instance of colorSet
        if ( colors[colorSetKey] instanceof Object ) {
            let colorSet: ColorSet = new ColorSet();
            colorSet.id = colorSetIndex++;
            colorSet.name = camelCase( [ materialColorsKey, colorSetKey] );
            for (let colorKey in colors[ colorSetKey ] ){
                let color = createAndSetColorToExport( colorSet.id, camelCase( [ materialColorsKey, colorSetKey, colorKey ] ), colors[ colorSetKey ][ colorKey ] );
            }
            colorSetsToExport.push( colorSet );
        } 
        // means iterated key only contains a single color to be added to defaultColorSet
        else {
            let color = createAndSetColorToExport( defaultColorSet.id, camelCase( [ materialColorsKey, colorSetKey ] ), colors[ colorSetKey ] )
        }
    }
    return {
        colors: colorsToExport,
        colorSets: colorSetsToExport
    }
}
console.log( JSON.stringify( prepareColorsAndColorSets( colors ) ) );
module.exports = prepareColorsAndColorSets( colors );
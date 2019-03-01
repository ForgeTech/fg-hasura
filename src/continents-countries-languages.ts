const countryI18n = require('./../node_modules/i18n-iso-countries/index');
const countryImports = require('./../node_modules/world-countries/dist/countries.json');
const countryIso = require('./../node_modules/country-iso/index');
// const language = require('./../node_modules/language-list/language-list');
import * as langs from './../node_modules/langs/data';
class Translation {
    id: Number;
    name: String;
    language: Number;
    translations: Number[];
    value: String;
    constructor() {
        this.id = -1;
        this.name = '';
        this.language = -1;
        this.translations = [];
        this.value = '';
    }
}
class Language {
    id: Number;
    name: String;
    constructor(){
        this.id = -1;
        this.name = '';
    }
}
class Country {
    id: Number;
    name: String;
    altSpellings: String[];// ["AW"],
    area: String;// 180,
    borders: Number[];// [],
    callingCode: String[];// ["297"],
    capital: String[];// ["Oranjestad"],
    cca2: String;// "AW",
    cca3: String;// "ABW",
    ccn3: String;// "533",
    cioc: String;// "ARU",
    continent_id: Number;// "Americas",
    currency: String[];// ["AWG"],
    demonym: String;// "Aruban",
    flag: String;// "\ud83c\udde6\ud83c\uddfc"
    independent: Boolean // false,
    landLocked: Boolean;// false,
    languages: Number[];// ""
    latLng: Number[];// 
    region_id: Number;// "Caribbean",
    rtl: Boolean;
    status: String;// "officially-assigned",
    tld: String[];// [".aw"],
    constructor(){
        this.id = -1;
        this.name = '';
        this.altSpellings = [];
        this.area = '';
        this.borders = [];
        this.callingCode = [];
        this.capital = [];
        this.cca2 = '';
        this.cca3 = '';
        this.ccn3 = '';
        this.cioc = '';
        this.continent_id = -1;
        this.currency = [];
        this.demonym = '';
        this.flag = '';
        this.independent = false;
        this.landLocked = false;
        this.languages = [];
        this.latLng = [];
        this.region_id = -1;
        this.rtl = false;
        this.status = '';
        this.tld = [];
    }
}
class Region {
    id: Number;
    name: String;
    continent_id: Number;
    // countries: Related by region_id on Country
    constructor(){
        this.id = -1;
        this.name = '';
        this.continent_id = -1;
    }
}
class Continent {
    id: Number;
    name: String;
    // countries: Related by continend_id on Country
    // regions: Related by continent_id on Region
    constructor(){
        this.id = -1;
        this.name = '';
    }
}
/**
 * 
 */
function prepareContinentsCountiesLanguages(){
    let continentsToExport: Continent[] = [];
    let countriesToExport: Country[] = [];
    let languagesToExport: Language[] = [];
    let regionToExport: Region[] = [];
    let continentsIndex: Number = 0;
    let countriesIndex: Number = 0;
    let languagesIndex: Number = 0;
    let regionIndex: Number = 0;

    // Iterate all keys available on color-object and transform them into
    // color- and colorSet-instances
    for( let countryKey in countryImports ){
        let countryImported = countryImports[ countryKey ];
        let country = new Country();
        country.name = countryImported.name 
        country.altSpellings = countryImported.altSpellings 
        country.area = countryImported.area 
        country.borders = countryImported.borders 
        country.callingCode = countryImported.callingCode 
        country.capital = countryImported.capital 
        country.cca2 = countryImported.cca2 
        country.cca3 = countryImported.cca3 
        country.ccn3 = countryImported.ccn3 
        country.cioc = countryImported.cioc 
        // country.continent_id = countryImported.continent_id 
        country.currency = countryImported.currency 
        country.demonym = countryImported.demonym 
        country.flag = countryImported.flag 
        country.independent = countryImported.independent 
        country.landLocked = countryImported.landLocked 
        // country.languages = countryImported.languages 
        country.latLng = countryImported.latLng 
        // country.region_id = countryImported.region_id 
        // country.rtl = countryImported.rtl
        country.status = countryImported.status 
        country.tld = countryImported.tld 
        
        // break;
    }
    let exportObject = {
        continent: continentsToExport,
        region: regionToExport,
        countries: countriesToExport,
        languages: languagesToExport
    }
    return exportObject
}
// console.log( prepareContinentsCountiesLanguages() );
export default prepareContinentsCountiesLanguages();
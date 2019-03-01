"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countryI18n = require('./../node_modules/i18n-iso-countries/index');
const countryImports = require('./../node_modules/world-countries/dist/countries.json');
const countryIso = require('./../node_modules/country-iso/index');
class Translation {
    constructor() {
        this.id = -1;
        this.name = '';
        this.language = -1;
        this.translations = [];
        this.value = '';
    }
}
class Language {
    constructor() {
        this.id = -1;
        this.name = '';
    }
}
class Country {
    constructor() {
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
    // countries: Related by region_id on Country
    constructor() {
        this.id = -1;
        this.name = '';
        this.continent_id = -1;
    }
}
class Continent {
    // countries: Related by continend_id on Country
    // regions: Related by continent_id on Region
    constructor() {
        this.id = -1;
        this.name = '';
    }
}
/**
 *
 */
function prepareContinentsCountiesLanguages() {
    let continentsToExport = [];
    let countriesToExport = [];
    let languagesToExport = [];
    let regionToExport = [];
    let continentsIndex = 0;
    let countriesIndex = 0;
    let languagesIndex = 0;
    let regionIndex = 0;
    // Iterate all keys available on color-object and transform them into
    // color- and colorSet-instances
    for (let countryKey in countryImports) {
        let countryImported = countryImports[countryKey];
        let country = new Country();
        country.name = countryImported.name;
        country.altSpellings = countryImported.altSpellings;
        country.area = countryImported.area;
        country.borders = countryImported.borders;
        country.callingCode = countryImported.callingCode;
        country.capital = countryImported.capital;
        country.cca2 = countryImported.cca2;
        country.cca3 = countryImported.cca3;
        country.ccn3 = countryImported.ccn3;
        country.cioc = countryImported.cioc;
        // country.continent_id = countryImported.continent_id 
        country.currency = countryImported.currency;
        country.demonym = countryImported.demonym;
        country.flag = countryImported.flag;
        country.independent = countryImported.independent;
        country.landLocked = countryImported.landLocked;
        // country.languages = countryImported.languages 
        country.latLng = countryImported.latLng;
        // country.region_id = countryImported.region_id 
        // country.rtl = countryImported.rtl
        country.status = countryImported.status;
        country.tld = countryImported.tld;
        // break;
    }
    let exportObject = {
        continent: continentsToExport,
        region: regionToExport,
        countries: countriesToExport,
        languages: languagesToExport
    };
    return exportObject;
}
// console.log( prepareContinentsCountiesLanguages() );
exports.default = prepareContinentsCountiesLanguages();

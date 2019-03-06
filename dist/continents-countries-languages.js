"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// i18n-iso-countries contains local files for country-names
const countryI18n = require('./../node_modules/i18n-iso-countries/index');
// Provides basic set of world-country data to be imported into database
const countryImports = require('./../node_modules/world-countries/dist/countries.json');
// Provides capabilities to query lat,lng and receive countries they are contained in
const countryIso = require('./../node_modules/country-iso/index');
const language = require('./../node_modules/language-list/language-list');
const langs = require('./../node_modules/langs');
class Translation {
    constructor() {
        this.id = null;
        this.name = '';
        this.language_id = null;
        this.translation_id = null;
        this.value = '';
    }
}
class Language {
    constructor() {
        this.id = -1;
        this.local = '';
        this.name = '';
        this.ISO639_1 = '';
        this.ISO639_2_2T = '';
        this.ISO639_2B = '';
        this.ISO639_3 = '';
    }
}
class Country {
    constructor() {
        this.id = -1;
        this.name = '';
        // this.altSpellings = [];
        this.area = '';
        // this.borders = [];
        // this.callingCode = [];
        // this.capital = [];
        this.cca2 = '';
        this.cca3 = '';
        this.ccn3 = '';
        this.cioc = '';
        this.continent_id = -1;
        // this.currency = [];
        this.demonym = '';
        this.flag = '';
        this.independent = false;
        this.landLocked = false;
        // this.languages = [];
        this.latLng = [];
        this.region_id = null;
        this.rtl = false;
        this.status = '';
        this.tld = [];
    }
}
class Region {
    // countries: Related by region_id on Country
    constructor() {
        this.id = null;
        this.name = '';
        this.continent_id = null;
    }
}
class Continent {
    // countries: Related by continend_id on Country
    // regions: Related by continent_id on Region
    constructor() {
        this.id = null;
        this.name = '';
    }
}
function prepareContinentsCountiesLanguages() {
    let continentsToExport = [];
    let countriesToExport = [];
    let languagesToExport = [];
    let regionsToExport = [];
    let continentIndex = 0;
    let countryIndex = 0;
    let languageIndex = 0;
    let regionIndex = 0;
    function getLanguage(languageName) {
        let createdOrFoundLanguage = languagesToExport.find(language => language.name === languageName);
        if (createdOrFoundLanguage === undefined) {
            createdOrFoundLanguage = new Language();
        }
        return createdOrFoundLanguage;
    }
    function getContinent(continentName) {
        let createdOrFoundContinent = continentsToExport.find(continent => continent.name === continentName);
        if (createdOrFoundContinent === undefined) {
            createdOrFoundContinent = new Continent();
        }
        return createdOrFoundContinent;
    }
    function getRegion(regionName) {
        let createdOrFoundRegion = regionsToExport.find(region => region.name === regionName);
        if (createdOrFoundRegion === undefined) {
            createdOrFoundRegion = new Region();
        }
        return createdOrFoundRegion;
    }
    // Iterate over language-codes
    for (let lang in langs.all()) {
        let language = new Language();
        language.id = languageIndex++;
        console.log(langs.all());
        break;
    }
    // Iterate all keys available on color-object and transform them into
    // color- and colorSet-instances
    for (let countryKey in countryImports) {
        let countryImported = countryImports[countryKey];
        // On imported country-data continent-name is on region-attribute
        let continent = getContinent(countryImported.region);
        if (continent.id === null) {
            continent.id = continentIndex++;
            continent.name = countryImported.region;
            continentsToExport.push(continent);
        }
        // On imported country-data region-name is on subregion-attribute
        // - also if subregion-string is empty/falsy reuse (continent) region-attribute
        let subregionName = countryImported.subregion ? countryImported.subregion : countryImported.region;
        let region = getRegion(subregionName);
        if (region.id === null) {
            region.id = regionIndex++;
            region.name = subregionName;
            region.continent_id = continent.id;
            regionsToExport.push(region);
        }
        let country = new Country();
        country.id = countryIndex++;
        country.continent_id = continent.id;
        country.region_id = region.id;
        country.name = countryImported.name;
        // country.altSpellings = countryImported.altSpellings 
        country.area = countryImported.area;
        // country.borders = countryImported.borders 
        // country.callingCode = countryImported.callingCode 
        // country.capital = countryImported.capital 
        country.cca2 = countryImported.cca2;
        country.cca3 = countryImported.cca3;
        country.ccn3 = countryImported.ccn3;
        country.cioc = countryImported.cioc;
        // country.continent_id = countryImported.continent_id 
        // country.currency = countryImported.currency 
        country.demonym = countryImported.demonym;
        country.flag = countryImported.flag;
        country.independent = countryImported.independent;
        country.landLocked = countryImported.landlocked;
        // country.languages = countryImported.languages 
        country.latLng = countryImported.latlng;
        // country.region_id = countryImported.region_id 
        // country.rtl = countryImported.rtl
        country.status = countryImported.status;
        country.tld = countryImported.tld;
        countriesToExport.push(country);
        // break;
    }
    let exportObject = {
        continent: continentsToExport,
        region: regionsToExport,
        country: countriesToExport,
        language: languagesToExport
    };
    // console.log( exportObject );
    return exportObject;
}
exports.default = prepareContinentsCountiesLanguages();

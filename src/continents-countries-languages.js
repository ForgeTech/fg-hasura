"use strict";
exports.__esModule = true;
// i18n-iso-countries contains local files for country-names
var countryI18n = require('./../node_modules/i18n-iso-countries/index');
// Provides basic set of world-country data to be imported into database
var countryImports = require('./../node_modules/world-countries/dist/countries.json');
// Provides capabilities to query lat,lng and receive countries they are contained in
var countryIso = require('./../node_modules/country-iso/index');
var language = require('./../node_modules/language-list/language-list');
var langs = require('./../node_modules/langs/data');
var Translation = /** @class */ (function () {
    function Translation() {
        this.id = null;
        this.name = '';
        this.language_id = null;
        this.translation_id = null;
        this.value = '';
    }
    return Translation;
}());
var Language = /** @class */ (function () {
    function Language() {
        this.id = -1;
        this.local = '';
        this.name = '';
        this.ISO639_1 = '';
        this.ISO639_2_2T = '';
        this.ISO639_2B = '';
        this.ISO639_3 = '';
    }
    return Language;
}());
var Country = /** @class */ (function () {
    function Country() {
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
    return Country;
}());
var Region = /** @class */ (function () {
    // countries: Related by region_id on Country
    function Region() {
        this.id = null;
        this.name = '';
        this.continent_id = null;
    }
    return Region;
}());
var Continent = /** @class */ (function () {
    // countries: Related by continend_id on Country
    // regions: Related by continent_id on Region
    function Continent() {
        this.id = null;
        this.name = '';
    }
    return Continent;
}());
function prepareContinentsCountiesLanguages() {
    var continentsToExport = [];
    var countriesToExport = [];
    var languagesToExport = [];
    var regionsToExport = [];
    var continentIndex = 0;
    var countryIndex = 0;
    var languageIndex = 0;
    var regionIndex = 0;
    function getLanguage(languageName) {
        var createdOrFoundLanguage = languagesToExport.find(function (language) { return language.name === languageName; });
        if (createdOrFoundLanguage === undefined) {
            createdOrFoundLanguage = new Language();
        }
        return createdOrFoundLanguage;
    }
    function getContinent(continentName) {
        var createdOrFoundContinent = continentsToExport.find(function (continent) { return continent.name === continentName; });
        if (createdOrFoundContinent === undefined) {
            createdOrFoundContinent = new Continent();
        }
        return createdOrFoundContinent;
    }
    function getRegion(regionName) {
        var createdOrFoundRegion = regionsToExport.find(function (region) { return region.name === regionName; });
        if (createdOrFoundRegion === undefined) {
            createdOrFoundRegion = new Region();
        }
        return createdOrFoundRegion;
    }
    // Iterate over language-codes
    for (var lang in langs.all()) {
        var language_1 = new Language();
        language_1.id = languageIndex++;
    }
    // Iterate all keys available on color-object and transform them into
    // color- and colorSet-instances
    for (var countryKey in countryImports) {
        var countryImported = countryImports[countryKey];
        // On imported country-data continent-name is on region-attribute
        var continent = getContinent(countryImported.region);
        if (continent.id === null) {
            continent.id = continentIndex++;
            continent.name = countryImported.region;
            continentsToExport.push(continent);
        }
        // On imported country-data region-name is on subregion-attribute
        // - also if subregion-string is empty/falsy reuse (continent) region-attribute
        var subregionName = countryImported.subregion ? countryImported.subregion : countryImported.region;
        var region = getRegion(subregionName);
        if (region.id === null) {
            region.id = regionIndex++;
            region.name = subregionName;
            region.continent_id = continent.id;
            regionsToExport.push(region);
        }
        var country = new Country();
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
    var exportObject = {
        continent: continentsToExport,
        region: regionsToExport,
        country: countriesToExport,
        language: languagesToExport
    };
    console.log(exportObject);
    return exportObject;
}
exports["default"] = prepareContinentsCountiesLanguages();

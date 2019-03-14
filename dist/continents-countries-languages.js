"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// i18n-iso-countries contains local files for country-names
const countryI18n = require('./../node_modules/i18n-iso-countries/index');
// Provides basic set of world-country data to be imported into database
const countryImports = require('./../node_modules/world-countries/dist/countries.json');
// Provides capabilities to query lat,lng and receive countries they are contained in
// const countryIso = require('./../node_modules/country-iso/index');
// Provide languages
const langs = require('./../node_modules/langs');
// Provide timezone information
const ct = require('countries-and-timezones');
const timezones = ct.raw.timezones;
// Provide currency information
const currency = require('currency-codes/data');
class Translation {
    constructor() {
        this.id = null;
        this.name = '';
        this.language_id = null;
        this.translation_id = null;
        this.value = '';
    }
}
class Currency {
    constructor() {
        this.id = null;
        this.name = '';
        this.code = '';
        this.digits = -1;
        this.number = -1;
    }
}
class CurrencyToCountry {
    constructor() {
        this.id = null;
        this.country_id = null;
        this.currency_id = null;
    }
}
class Language {
    constructor() {
        this.id = null;
        this.local = '';
        this.name = '';
        this.native = '';
        this.ISO639_1 = '';
        this.ISO639_2 = '';
        this.ISO639_2T = '';
        this.ISO639_2B = '';
        this.ISO639_3 = '';
    }
}
class LanguageToCountry {
    constructor() {
        this.id = null;
        this.country_id = null;
        this.language_id = null;
    }
}
class Country {
    constructor() {
        this.id = null;
        this.name = '';
        // this.altSpellings = [];
        this.area = '';
        this.borders = [];
        this.callingCode = [];
        this.capital = [];
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
        // this.rtl = false;
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
class Timezone {
    // countries: Country[];
    constructor() {
        this.id = null;
        this.name = '';
        this.utcOffset = -1;
        this.offsetStr = '+4:00';
    }
}
class TimezoneToCountry {
    constructor() {
        this.id = null;
        this.country_id = null;
        this.timezone_id = null;
    }
}
function prepareContinentsCountiesLanguages() {
    let continentsToExport = [];
    let countriesToExport = [];
    let currencyToExport = [];
    let currencytoCountryToExport = [];
    let languagesToExport = [];
    let languageToCountryToExport = [];
    let regionsToExport = [];
    let timezonesToExport = [];
    let timezoneToCountryToExport = [];
    let currencyIndex = 0;
    let currencyToCountryIndex = 0;
    let continentIndex = 0;
    let countryIndex = 0;
    let languageIndex = 0;
    let regionIndex = 0;
    let timezoneIndex = 0;
    let languageToCountryIndex = 0;
    let timezoneToCountryIndex = 0;
    function getLanguage(languageName) {
        let createdOrFoundLanguage = languagesToExport.find(language => language.name === languageName);
        if (createdOrFoundLanguage === undefined) {
            createdOrFoundLanguage = new Language();
        }
        return createdOrFoundLanguage;
    }
    function getLanguageByKey(languageKey, languageName) {
        let createdOrFoundLanguage = languagesToExport.find(language => language.ISO639_3 === languageKey);
        if (createdOrFoundLanguage === undefined) {
            console.log('ERROR! Lanuage ', languageName, ' ', languageKey, ' not found!');
        }
        return createdOrFoundLanguage;
    }
    function getCurrency(currencyCode) {
        let createdOrFoundCurrency = currencyToExport.find(currency => currency.code === currencyCode);
        if (createdOrFoundCurrency === undefined) {
            createdOrFoundCurrency = new Currency();
        }
        return createdOrFoundCurrency;
    }
    function getTimezone(timezoneName) {
        let createdOrFoundTimezone = timezonesToExport.find(timezone => timezone.name === timezoneName);
        if (createdOrFoundTimezone === undefined) {
            createdOrFoundTimezone = new Timezone();
        }
        return createdOrFoundTimezone;
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
    function getCountryForTimezone(countryShortCode) {
        let createdOrFoundCountry = countriesToExport.find(country => country.cca2 === countryShortCode);
        if (createdOrFoundCountry !== undefined) {
        }
        else {
            console.log('ERROR! Country for ', countryShortCode, ' not found!');
        }
        return createdOrFoundCountry;
    }
    function createCountryToCurrency(country, countryImport) {
        countryImport.currency.forEach(currencyCode => {
            let currency = getCurrency(currencyCode);
            if (currency !== undefined) {
                let currencyToCountry = new CurrencyToCountry();
                currencyToCountry.id = currencyToCountryIndex++;
                currencyToCountry.country_id = country.id;
                currencyToCountry.currency_id = currency.id;
                currencytoCountryToExport.push(currencyToCountry);
            }
            else {
                console.log('ERROR! Currency ', currencyCode, ' not found!');
                console.log(country);
            }
        });
    }
    function createCountryToLanguage(country, countryImport) {
        for (let languageKey in countryImport.languages) {
            // console.log(languageKey)
            let language = getLanguageByKey(languageKey, countryImport.languages[languageKey]);
            if (language !== undefined) {
                let languageToCountry = new LanguageToCountry();
                languageToCountry.id = languageToCountryIndex++;
                languageToCountry.country_id = country.id;
                languageToCountry.language_id = language.id;
                languageToCountryToExport.push(languageToCountry);
            }
            else {
                console.log('ERROR! Language ', languageKey, ' not found!');
                //  console.log(country);
            }
        }
        ;
    }
    function createCountryToTimezone(timezone, timezoneImport) {
        timezoneImport.countries.forEach(countryShort => {
            let country = getCountryForTimezone(countryShort);
            if (country !== undefined) {
                let timezoneToCountry = new TimezoneToCountry();
                timezoneToCountry.id = timezoneToCountryIndex++;
                timezoneToCountry.country_id = country.id;
                timezoneToCountry.timezone_id = timezone.id;
                timezoneToCountryToExport.push(timezoneToCountry);
            }
            else {
                console.log('ERROR! Country for ', timezone.name, ' not found!');
                //  console.log(country);
            }
        });
    }
    // Iterate over language-codes
    let allLangs = langs.all();
    allLangs.forEach(lang => {
        // console.log('lang-name');
        // console.log(lang.name);
        let language = getLanguage(lang.name);
        if (language.id === null) {
            language.name = lang.name;
            // language.native = lang.native;
            language.ISO639_1 = lang["1"];
            language.ISO639_2 = lang["2"];
            language.ISO639_2B = lang["2B"];
            language.ISO639_2T = lang["2T"];
            language.ISO639_3 = lang["3"];
            language.id = languagesToExport.length;
            languagesToExport.push(language);
        }
    });
    // Import currencies
    currency.forEach(cur => {
        let currency = getCurrency(cur.name);
        if (currency.id === null) {
            currency.name = cur.currency;
            currency.code = cur.code;
            currency.digits = cur.digits;
            currency.number = cur.number;
            currency.id = currencyIndex++;
            currencyToExport.push(currency);
        }
    });
    // Import countries
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
        country.borders = countryImported.borders;
        country.callingCode = countryImported.callingCode;
        country.capital = countryImported.capital;
        country.cca2 = countryImported.cca2;
        country.cca3 = countryImported.cca3;
        country.ccn3 = countryImported.ccn3;
        country.cioc = countryImported.cioc;
        // country.currency = countryImported.currency 
        createCountryToCurrency(country, countryImported);
        country.demonym = countryImported.demonym;
        country.flag = countryImported.flag;
        country.independent = countryImported.independent;
        country.landLocked = countryImported.landlocked;
        // country.languages = countryImported.languages
        createCountryToLanguage(country, countryImported);
        country.latLng = countryImported.latlng;
        // country.region_id = countryImported.region_id 
        // country.rtl = countryImported.rtl
        country.status = countryImported.status;
        country.tld = countryImported.tld;
        countriesToExport.push(country);
        // break;
    }
    // Import timezones
    for (let timezoneKey in timezones) {
        let tz = timezones[timezoneKey];
        let timezone = getTimezone(tz.name);
        if (timezone.id === null) {
            timezone.name = tz.name;
            timezone.utcOffset = tz.utcOffset;
            timezone.offsetStr = tz.offsetStr;
            timezone.id = timezoneIndex++;
            timezonesToExport.push(timezone);
            createCountryToTimezone(timezone, tz);
        }
    }
    ;
    let exportObject = {
        continent: continentsToExport,
        region: regionsToExport,
        country: countriesToExport,
        language: languagesToExport,
        languageToCountry: languageToCountryToExport,
        currency: currencyToExport,
        currencyToCountry: currencytoCountryToExport,
        timezone: timezonesToExport,
        timezoneToCountry: timezoneToCountryToExport,
    };
    // console.log( exportObject );
    return exportObject;
}
exports.default = prepareContinentsCountiesLanguages();

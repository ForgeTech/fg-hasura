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
    id: Number | null;
    name: String;
    language_id: Number | null;
    translation_id: Number | null;
    value: String;
    constructor() {
        this.id = null;
        this.name = '';
        this.language_id = null;
        this.translation_id = null;
        this.value = '';
    }
}
class Currency {
    id: Number | null;
    name: String;
    code: String;
    digits: Number;
    number: Number;
    constructor(){
        this.id = null;
        this.name = '';
        this.code = '';
        this.digits = -1;
        this.number = -1;
    }
}
class CurrencyToCountry {
    id: Number | null;
    currency_id: Number | null;
    country_id: Number | null;
    constructor(){
        this.id = null;
        this.country_id = null;
        this.currency_id = null;
    }
}
class Language {
    id: Number | null;
    name: String;
    native: String;
    local: String;
    ISO639_1: String;
    ISO639_2: String;
    ISO639_2T: String;
    ISO639_2B: String;
    ISO639_3: String;
    constructor(){
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
    id: Number | null;
    language_id: Number | null;
    country_id: Number | null;
    constructor(){
        this.id = null;
        this.country_id = null;
        this.language_id = null;
    }
}
class Country {
    id: Number | null;
    name: String;
    // altSpellings: String[];// ["AW"],
    area: String;// 180,
    borders: Number[];// [],
    callingCode: String[];// ["297"],
    capital: String[];// ["Oranjestad"],
    cca2: String;// "AW",
    cca3: String;// "ABW",
    ccn3: String;// "533",
    cioc: String;// "ARU",
    continent_id: Number;// "Americas",
    // currency: String[];// ["AWG"],
    demonym: String;// "Aruban",
    flag: String;// "\ud83c\udde6\ud83c\uddfc"
    independent: Boolean // false,
    landLocked: Boolean;// false,
    // languages: Number[];// ""
    latLng: Number[];// 
    region_id: Number | null;// "Caribbean",
    // rtl: Boolean;
    status: String;// "officially-assigned",
    tld: String[];// [".aw"],
    constructor(){
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
    id: Number | null;
    name: String;
    continent_id: Number | null;
    // countries: Related by region_id on Country
    constructor(){
        this.id = null;
        this.name = '';
        this.continent_id = null;
    }
}
class Continent {
    id: Number | null;
    name: String;
    // countries: Related by continend_id on Country
    // regions: Related by continent_id on Region
    constructor(){
        this.id = null;
        this.name = '';
    }
}
class Timezone {
    id: Number | null;
    name: String;
    utcOffset: Number;
    offsetStr: String;
    // countries: Country[];
    constructor(){
        this.id = null;
        this.name = '';
        this.utcOffset = -1;
        this.offsetStr = '+4:00';
    }
}
class TimezoneToCountry {
    id: Number | null;
    timezone_id: Number | null;
    country_id: Number | null;
    constructor(){
        this.id = null;
        this.country_id = null;
        this.timezone_id = null;
    }
}
function prepareContinentsCountiesLanguages(){
    let continentsToExport: Continent[] = [];
    let countriesToExport: Country[] = [];
    let currencyToExport: Currency[] = [];
    let currencytoCountryToExport: CurrencyToCountry[] = [];
    let languagesToExport: Language[] = [];
    let languageToCountryToExport: LanguageToCountry[] = [];
    let regionsToExport: Region[] = [];
    let timezonesToExport: Timezone[] = [];
    let timezoneToCountryToExport: TimezoneToCountry[] = [];
    let currencyIndex: number = 0;
    let currencyToCountryIndex: number = 0;
    let continentIndex: number = 0;
    let countryIndex: number = 0;
    let languageIndex: number = 0;
    let regionIndex: number = 0;
    let timezoneIndex: number = 0;
    let languageToCountryIndex: number = 0;
    let timezoneToCountryIndex: number = 0;

    function getLanguage( languageName: String ): Language {
        let createdOrFoundLanguage: Language | undefined = languagesToExport.find( language => language.name === languageName );
        if ( createdOrFoundLanguage === undefined ){
            createdOrFoundLanguage = new Language();
        }
        return createdOrFoundLanguage;
    }
    function getLanguageByKey( languageKey: String, languageName ): Language | undefined {
        let createdOrFoundLanguage: Language | undefined = languagesToExport.find( language => language.ISO639_3 === languageKey );
        if ( createdOrFoundLanguage === undefined ){
            console.log('ERROR! Lanuage ', languageName, ' ', languageKey, ' not found!')
        }
        return createdOrFoundLanguage;
    }
    function getCurrency( currencyCode: String ): Currency {
        let createdOrFoundCurrency: Currency | undefined = currencyToExport.find( currency => currency.code === currencyCode );
        if ( createdOrFoundCurrency === undefined ){
            createdOrFoundCurrency = new Currency();
        }
        return createdOrFoundCurrency;
    }
    function getTimezone( timezoneName: String ): Timezone {
        let createdOrFoundTimezone: Timezone | undefined = timezonesToExport.find( timezone => timezone.name === timezoneName );
        if ( createdOrFoundTimezone === undefined ){
            createdOrFoundTimezone = new Timezone();
        }
        return createdOrFoundTimezone;
    }
    function getContinent( continentName: String ): Continent {
        let createdOrFoundContinent: Continent | undefined = continentsToExport.find( continent => continent.name === continentName );
        if ( createdOrFoundContinent === undefined ){
            createdOrFoundContinent = new Continent();
        }
        return createdOrFoundContinent;
    }
    function getRegion( regionName: String ): Region {
        let createdOrFoundRegion: Region | undefined = regionsToExport.find( region => region.name === regionName );
        if ( createdOrFoundRegion === undefined ){
            createdOrFoundRegion = new Region();
        }
        return createdOrFoundRegion;
    }
    function getCountryForTimezone( countryShortCode: String ): Country | undefined {
        let createdOrFoundCountry: Country | undefined = countriesToExport.find( country => country.cca2 === countryShortCode );
        if ( createdOrFoundCountry !== undefined ){
        } else {
            console.log('ERROR! Country for ', countryShortCode, ' not found!');
        }
        return createdOrFoundCountry;
    }
    function createCountryToCurrency( country: Country, countryImport: any){
        countryImport.currency.forEach( currencyCode => {
           let currency = getCurrency( currencyCode );
           if( currency !== undefined ){
               let currencyToCountry: CurrencyToCountry = new CurrencyToCountry();
               currencyToCountry.id = currencyToCountryIndex++;
               currencyToCountry.country_id = country.id;
               currencyToCountry.currency_id = currency.id;
               currencytoCountryToExport.push( currencyToCountry );
           } else {
                console.log('ERROR! Currency ', currencyCode, ' not found!');
                console.log(country);
           }
        });
    }
    function createCountryToLanguage( country: Country, countryImport: any){
        for( let languageKey in countryImport.languages ){
            // console.log(languageKey)
            let language = getLanguageByKey( languageKey, countryImport.languages[ languageKey ] );
            if( language !== undefined ){
                let languageToCountry: LanguageToCountry = new LanguageToCountry();
                languageToCountry.id = languageToCountryIndex++;
                languageToCountry.country_id = country.id;
                languageToCountry.language_id = language.id;
                languageToCountryToExport.push( languageToCountry );
            } else {
                 console.log('ERROR! Language ', languageKey, ' not found!');
                //  console.log(country);
            }
         };
    }
    function createCountryToTimezone( timezone: Timezone, timezoneImport: any ){
        timezoneImport.countries.forEach( countryShort => {
            let country: Country | undefined = getCountryForTimezone( countryShort );
            if( country !== undefined ){
                let timezoneToCountry: TimezoneToCountry = new TimezoneToCountry();
                timezoneToCountry.id = timezoneToCountryIndex++;
                timezoneToCountry.country_id = country.id;
                timezoneToCountry.timezone_id = timezone.id;
                timezoneToCountryToExport.push( timezoneToCountry );
            } else {
                 console.log('ERROR! Country for ', timezone.name, ' not found!');
                //  console.log(country);
            }
        });
    }
    // Iterate over language-codes
    let allLangs: { name: string, native: string, local: string, '1': string, '2': string, '2T': string, '2B': string, '3': string }[] = langs.all();
    allLangs.forEach( lang => {
        // console.log('lang-name');
        // console.log(lang.name);
        let language: Language = getLanguage( lang.name );
        if(language.id === null){
            language.name = lang.name;
            // language.native = lang.native;
            language.ISO639_1 = lang["1"];
            language.ISO639_2 = lang["2"];
            language.ISO639_2B = lang["2B"];
            language.ISO639_2T = lang["2T"];
            language.ISO639_3 = lang["3"];
            language.id = languagesToExport.length;
            languagesToExport.push( language );
        }
    });
    // Import currencies
    currency.forEach( cur => {
        let currency: Currency = getCurrency( cur.name );
        if(currency.id === null){
            currency.name = cur.currency;
            currency.code = cur.code;
            currency.digits = cur.digits;
            currency.number = cur.number;
            currency.id = currencyIndex++;
            currencyToExport.push( currency );
        }
    });
    // Import countries
    for( let countryKey in countryImports ){
        let countryImported = countryImports[ countryKey ];
        // On imported country-data continent-name is on region-attribute
        let continent = getContinent( countryImported.region );
        if( continent.id === null ){
            continent.id = continentIndex++;
            continent.name = countryImported.region;
            continentsToExport.push( continent );
        }
        // On imported country-data region-name is on subregion-attribute
        // - also if subregion-string is empty/falsy reuse (continent) region-attribute
        let subregionName = countryImported.subregion ? countryImported.subregion : countryImported.region
        let region = getRegion( subregionName );
        if( region.id === null ){
            region.id = regionIndex++;
            region.name = subregionName;
            region.continent_id = continent.id;
            regionsToExport.push( region );
        }
        let country = new Country();
        country.id = countryIndex++;
        country.continent_id = continent.id;
        country.region_id = region.id;
        country.name = countryImported.name 
        // country.altSpellings = countryImported.altSpellings 
        country.area = countryImported.area 
        country.borders = countryImported.borders 
        country.callingCode = countryImported.callingCode 
        country.capital = countryImported.capital 
        country.cca2 = countryImported.cca2 
        country.cca3 = countryImported.cca3 
        country.ccn3 = countryImported.ccn3 
        country.cioc = countryImported.cioc
        // country.currency = countryImported.currency 
        createCountryToCurrency(country, countryImported);
        
        country.demonym = countryImported.demonym 
        country.flag = countryImported.flag 
        country.independent = countryImported.independent 
        country.landLocked = countryImported.landlocked 
        // country.languages = countryImported.languages
        createCountryToLanguage(country, countryImported);

        country.latLng = countryImported.latlng 
        // country.region_id = countryImported.region_id 
        // country.rtl = countryImported.rtl
        country.status = countryImported.status 
        country.tld = countryImported.tld 
        countriesToExport.push( country );
        // break;
    }
    // Import timezones
    for( let timezoneKey in timezones ){
        let tz = timezones[ timezoneKey ];
        let timezone: Timezone = getTimezone( tz.name );
        if(timezone.id === null){
            timezone.name = tz.name;
            timezone.utcOffset = tz.utcOffset;
            timezone.offsetStr = tz.offsetStr;
            timezone.id = timezoneIndex++;
            timezonesToExport.push( timezone );
            createCountryToTimezone( timezone, tz);
        }
    };
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
    }
    // console.log( exportObject );
    return exportObject
}
export default prepareContinentsCountiesLanguages();
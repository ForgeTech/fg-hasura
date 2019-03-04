// i18n-iso-countries contains local files for country-names
const countryI18n = require('./../node_modules/i18n-iso-countries/index');
// Provides basic set of world-country data to be imported into database
const countryImports = require('./../node_modules/world-countries/dist/countries.json');
// Provides capabilities to query lat,lng and receive countries they are contained in
const countryIso = require('./../node_modules/country-iso/index');

const language = require('./../node_modules/language-list/language-list');
const langs = require('./../node_modules/langs/data');

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
class Language {
    id: Number | null;
    name: String;
    local: String;
    ISO639_1: String;
    ISO639_2_2T: String;
    ISO639_2B: String;
    ISO639_3: String;
    constructor(){
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
    id: Number;
    name: String;
    // altSpellings: String[];// ["AW"],
    area: String;// 180,
    // borders: Number[];// [],
    // callingCode: String[];// ["297"],
    // capital: String[];// ["Oranjestad"],
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
    rtl: Boolean;
    status: String;// "officially-assigned",
    tld: String[];// [".aw"],
    constructor(){
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
function prepareContinentsCountiesLanguages(){
    let continentsToExport: Continent[] = [];
    let countriesToExport: Country[] = [];
    let languagesToExport: Language[] = [];
    let regionsToExport: Region[] = [];
    let continentIndex: number = 0;
    let countryIndex: number = 0;
    let languageIndex: number = 0;
    let regionIndex: number = 0;

    function getLanguage( languageName: String ): Language {
        let createdOrFoundLanguage: Language | undefined = languagesToExport.find( language => language.name === languageName );
        if ( createdOrFoundLanguage === undefined ){
            createdOrFoundLanguage = new Language();
        }
        return createdOrFoundLanguage;
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
    // Iterate over language-codes
    for( let lang in langs.all() ){
        let language = new Language();
        language.id = languageIndex++;
    }
    
    // Iterate all keys available on color-object and transform them into
    // color- and colorSet-instances
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
        // country.borders = countryImported.borders 
        // country.callingCode = countryImported.callingCode 
        // country.capital = countryImported.capital 
        country.cca2 = countryImported.cca2 
        country.cca3 = countryImported.cca3 
        country.ccn3 = countryImported.ccn3 
        country.cioc = countryImported.cioc 
        // country.continent_id = countryImported.continent_id 
        // country.currency = countryImported.currency 
        country.demonym = countryImported.demonym 
        country.flag = countryImported.flag 
        country.independent = countryImported.independent 
        country.landLocked = countryImported.landlocked 
        // country.languages = countryImported.languages 
        country.latLng = countryImported.latlng 
        // country.region_id = countryImported.region_id 
        // country.rtl = countryImported.rtl
        country.status = countryImported.status 
        country.tld = countryImported.tld 
        countriesToExport.push( country );
        // break;
    }
    let exportObject = {
        continent: continentsToExport,
        region: regionsToExport,
        country: countriesToExport,
        language: languagesToExport
    }
    console.log( exportObject );
    return exportObject
}
export default prepareContinentsCountiesLanguages();
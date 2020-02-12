const knownCssProps = require('./node_modules/known-css-properties/data/all.json');
const allCss = require('./data/all-css.json');
// https://cssreference.io/

import * as html from 'node_modules/html-tags';

class CSSProperty {
    id: Number | null;
    name: String;
    tag: String;
    description: String;
    constructor(){
        this.id = null;
        this.name = '';
        this.tag = '';
        this.description = '';
    }
}
class CssCatergory {
    id: Number | null;
    name: String;
    description: String;
    constructor(){
        this.id = null;
        this.name = '';
        this.description = '';
    }
}

function prepareCssAndCssGroups() {
    let CssPropertiesToExport: CSSProperty[] = [];
    let CssCatergoriesToExport: CssCatergory[] = [];

    console.log("CSS");
    console.log(knownCssProps);
    console.log(allCss);

    return {
        CssProperty: CssPropertiesToExport,
        CssCatergory: CssCatergoriesToExport,
    }
}

export default prepareCssAndCssGroups();
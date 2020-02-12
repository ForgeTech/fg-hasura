"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knownCssProps = require('./node_modules/known-css-properties/data/all.json');
const allCss = require('./data/all-css.json');
class CSSProperty {
    constructor() {
        this.id = null;
        this.name = '';
        this.tag = '';
        this.description = '';
    }
}
class CssCatergory {
    constructor() {
        this.id = null;
        this.name = '';
        this.description = '';
    }
}
function prepareCssAndCssGroups() {
    let CssPropertiesToExport = [];
    let CssCatergoriesToExport = [];
    console.log("CSS");
    console.log(knownCssProps);
    console.log(allCss);
    return {
        CssProperty: CssPropertiesToExport,
        CssCatergory: CssCatergoriesToExport,
    };
}
exports.default = prepareCssAndCssGroups();

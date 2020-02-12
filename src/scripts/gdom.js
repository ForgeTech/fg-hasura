"use strict";
exports.__esModule = true;
var Schema = require("gdom-node").Schema;
// not using an ES6 transpiler
var parse = require("gdom-node").parse;
var query = "{\n  page(url:\"https://websitesetup.org/html5-periodical-table/\") {\n    items: query(selector:\"span.box\") {\n      tag: text(selector:\"span.box\")\n      description: attr(selector:\"span.box\" name:\"data-original-title\")\n    }\n  }\n}";
parse(query).then(function (result) {
    console.log('RESULT');
    console.log(result.data.page.items);
});

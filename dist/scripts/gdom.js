"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Schema = require("gdom-node").Schema;
// not using an ES6 transpiler
var parse = require("gdom-node").parse;
let query = `{
  page(url:"https://websitesetup.org/html5-periodical-table/") {
    items: query(selector:"span.box") {
      tag: attr(name:)
      description: attr(selector:"span.box" name:"data-original-title")
    }
  }
}`;
parse(query).then(function (result) {
    console.log('RESULT');
    console.log(result.data.page.items);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Schema = require("gdom-node").Schema;
// not using an ES6 transpiler
var parse = require("gdom-node").parse;
let query = `{
  page(url:"https://websitesetup.org/html5-periodical-table/") {
    items: query(selector:"tr.athing") {
      rank: text(selector:"td span.rank")
      description: text(selector:"data-original-title")
      sitebit: text(selector:"span.comhead a")
      url: attr(selector:"td.title a", name:"href")
      attrs: next {
         score: text(selector:"span.score")   
      }
    }
  }
}`;
parse(query).then(function (result) {
    console.log('RESULT');
    console.log(result);
    console.log('Schema');
    console.log(Schema);
});

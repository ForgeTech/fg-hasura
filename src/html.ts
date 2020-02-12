import * as html from './../node_modules/html-tags';
import * as selfClosingHtml from './../node_modules/html-tags/void';
// Take a look at this
// https://websitesetup.org/html5-periodical-table/
// https://htmlreference.io/

class HTMLTag {
    id: Number | null;
    name: String;
    tag: String;
    description: String;
    HTMLGroup_id: Number | null;
    constructor(){
        this.id = null;
        this.name = '';
        this.tag = '';
        this.description = '';
        this.HTMLGroup_id = null;
    }
}
class HTMLGroup {
    id: Number | null;
    name: String;
    description: String;
    constructor(){
        this.id = null;
        this.name = '';
        this.description = '';
    }
}

function prepareHTMLTagsAndGroups() {
    let HTMLTagsToExport: HTMLTag[] = [];
    let HTMLGroupsToExport: HTMLGroup[] = [];
    
    let rootElementTags = ["html"];
    let rootElementGroup = new HTMLGroup();
    rootElementGroup.id = 0;
    rootElementGroup.name="Root"
    HTMLGroupsToExport.push( rootElementGroup );
    
    let scriptingTags = ["script", "noscript", "template"];
    let scriptingGroup = new HTMLGroup();
    scriptingGroup.id = 1;
    scriptingGroup.name="Script"
    HTMLGroupsToExport.push( scriptingGroup );
    
    let interactiveElementTags = ["menu", "menu-item", "summary", "details"];
    let interactiveElementsGroup = new HTMLGroup();
    interactiveElementsGroup.id = 2;
    interactiveElementsGroup.name="Interactive"
    HTMLGroupsToExport.push( interactiveElementsGroup );
    
    let documentMetaDataTags = ["meta", "link", "base", "title", "head"];
    let documentMetaDataGroup = new HTMLGroup();
    documentMetaDataGroup.id = 3;
    documentMetaDataGroup.name="Metadata"
    HTMLGroupsToExport.push( documentMetaDataGroup );
    
    let editTags = ["del", "ins"];
    let editsGroup = new HTMLGroup();
    editsGroup.id = 4;
    editsGroup.name="Edit"
    HTMLGroupsToExport.push( editsGroup );

    let tabularDataTags = ["th", "td", "tr", "tfoot", "thead", "tbody", "col", "col-group", "caption", "table"];
    let tabularDataGroup = new HTMLGroup();
    tabularDataGroup.id = 5;
    tabularDataGroup.name="Table"
    HTMLGroupsToExport.push( tabularDataGroup );

    let groupingContentTags = ["img", "iframe", "embed", "object", "param", "video", "audio", "source", "track", "canvas", "map", "area", "svg", "math"];
    let groupingContentGroup = new HTMLGroup();
    groupingContentGroup.id = 6;
    groupingContentGroup.name="Group Content"
    HTMLGroupsToExport.push( groupingContentGroup );

    let embededContentTags = ["img", "iframe", "embed", "object", "param", "video", "audio", "source", "track", "canvas", "map", "area", "svg", "math"];
    let embededContentGroup = new HTMLGroup();
    embededContentGroup.id = 7;
    embededContentGroup.name="Embedded Content"
    HTMLGroupsToExport.push( embededContentGroup );

    let formGroupTags = ["meter", "progress", "form", "fieldset", "output", "legend", "keygen", "textarea", "option", "optgroup", "datalist", "select", "button", "input", "label"];
    let formsGroup = new HTMLGroup();
    formsGroup.id = 8;
    formsGroup.name="Form"
    HTMLGroupsToExport.push( formsGroup );

    let sectionGroupTags = ["h6", "h5", "h1", "aside", "header", "h4", "h2", "article", "footer", "h3", "nav", "address", "section", "main", "body"];
    let sectionGroup = new HTMLGroup();
    sectionGroup.id = 9;
    sectionGroup.name="Section"
    HTMLGroupsToExport.push( sectionGroup );

    let textGroupTags = ["wbr", "samp", "br", "kbd", "span", "sub", "bdo", "ruby", "mark", "sup", "bdi", "i", "rp", "b", "rt", "u", "var", "code", "time", "small", "strong", "data", "abbr", "dfn", "q", "cite", "s", "em", "a"];
    let textGroup = new HTMLGroup();
    textGroup.id = 10;
    textGroup.name="Text"
    HTMLGroupsToExport.push( textGroup );

    let styleGroupTags = [ "style" ]
    let StyleGroup = new HTMLGroup();
    StyleGroup.id = 11;
    StyleGroup.name="Style"
    HTMLGroupsToExport.push( StyleGroup );
    
    let htmlTags = [
        ...html.default,
        ...selfClosingHtml.default
    ]
    let htmlTagIndex = 0;
    // Check for differences in imported npm-html-set and the one from html-periodic table
    // and create groups of tags - and tags - for database
    htmlTags.forEach( tag => {
        let htmlTag: HTMLTag = new HTMLTag();
        htmlTag.id = htmlTagIndex++;
        htmlTag.tag = tag;
        switch(tag){
            case (rootElementTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = rootElementGroup.id;
            break;
            case (scriptingTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = scriptingGroup.id;
            break;
            case (interactiveElementTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = interactiveElementsGroup.id;
            break;
            case (documentMetaDataTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = documentMetaDataGroup.id;
            break;
            case (editTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = editsGroup.id;
            break;
            case (tabularDataTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = tabularDataGroup.id;
            break;
            case (groupingContentTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = groupingContentGroup.id;
            break;
            case (embededContentTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = embededContentGroup.id;
            break;
            case (formGroupTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = formsGroup.id;
            break;
            case (sectionGroupTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = sectionGroup.id;
            break;
            case (textGroupTags.indexOf(tag) != -1):
                htmlTag.HTMLGroup_id = textGroup.id;
            break;
            default:
            console.log('ERROR: Tag', tag, "doesn't match any HTMLTagGroup");
            break;
        }
        HTMLTagsToExport.push(htmlTag);
    });

    return {
        HTMLTag: HTMLTagsToExport,
        HTMLGroup: HTMLGroupsToExport,
    }
}

export default prepareHTMLTagsAndGroups();
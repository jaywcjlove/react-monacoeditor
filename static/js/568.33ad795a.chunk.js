(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[568],{1229:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default='PREFIX a: <http://www.w3.org/2000/10/annotation-ns#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Comment!\n\nSELECT ?given ?family\nWHERE {\n  {\n    ?annot a:annotates <http://www.w3.org/TR/rdf-sparql-query/> .\n    ?annot dc:creator ?c .\n    OPTIONAL {?c foaf:givenName ?given ;\n                 foaf:familyName ?family }\n  } UNION {\n    ?c !foaf:knows/foaf:knows? ?thing.\n    ?thing rdfs\n  } MINUS {\n    ?thing rdfs:label "\u525b\u67d4\u6d41"@jp\n  }\n  FILTER isBlank(?c)\n}\n'}}]);
//# sourceMappingURL=568.33ad795a.chunk.js.map
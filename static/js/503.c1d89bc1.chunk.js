(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[503],{1164:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="\\ Insertion sort\n\n: cell-  1 cells - ;\n\n: insert ( start end -- start )\n  dup @ >r ( r: v )\n  begin\n    2dup <\n  while\n    r@ over cell- @ <\n  while\n    cell-\n    dup @ over cell+ !\n  repeat then\n  r> swap ! ;\n\n: sort ( array len -- )\n  1 ?do\n    dup i cells + insert\n  loop drop ;\n"}}]);
//# sourceMappingURL=503.c1d89bc1.chunk.js.map
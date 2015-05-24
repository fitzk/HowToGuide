 require([
  "CodeMirror/lib/codemirror", "CodeMirror/mode/htmlmixed/htmlmixed"
], function(CodeMirror) {
  var start0 = CodeMirror.fromTextArea(document.getElementById("start0"), {
    lineNumbers: true,
    mode: "htmlmixed"
  });
  
  start0.setOption("theme", 'solarized');
  start0.setOption("readOnly", true);
  
}); 




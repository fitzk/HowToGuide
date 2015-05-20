require([
  "CodeMirror/lib/codemirror", "CodeMirror/mode/htmlmixed/htmlmixed"
], function(CodeMirror) {
  var editor1 = CodeMirror.fromTextArea(document.getElementById("code0"), {
    lineNumbers: true,
    mode: "htmlmixed"
  });
  
  editor1.setOption("theme", 'solarized');
  
  CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    mode: "htmlmixed"
  });
});


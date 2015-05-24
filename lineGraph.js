require([
  "CodeMirror/lib/codemirror", "CodeMirror/mode/javascript/javascript.js"
], function(CodeMirror) {
  
  var editor1 = CodeMirror.fromTextArea(document.getElementById("lg1"), {
    lineNumbers: true,
    mode: "javascript"
  });
   editor1.setOption("theme", 'solarized');
   editor1.setOption("readOnly", true);
   
   var editor2 = CodeMirror.fromTextArea(document.getElementById("lg2"), {
    lineNumbers: true,
    mode: "javascript"
  });
   editor3.setOption("theme", 'solarized');
   editor3.setOption("readOnly", true);
});
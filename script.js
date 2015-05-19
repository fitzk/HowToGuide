require([
  "/lib/codemirror", "/mode/htmlmixed/htmlmixed"
], function(CodeMirror) {
  CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "htmlmixed"
  });
});
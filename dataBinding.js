
require([
		"CodeMirror/lib/codemirror", "CodeMirror/mode/javascript/javascript.js"
	], function (CodeMirror) {

	var editor1 = CodeMirror.fromTextArea(document.getElementById("db1"), {
			lineNumbers : true,
			mode : "javascript"
		});
	editor1.setOption("theme", 'solarized');
	editor1.setOption("readOnly", true);

	var editor2 = CodeMirror.fromTextArea(document.getElementById("db2"), {
			lineNumbers : true,
			mode : "javascript"
		});
	editor2.setOption("theme", 'solarized');
	editor2.setOption("readOnly", true);
});

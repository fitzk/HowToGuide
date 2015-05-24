require([
		"CodeMirror/lib/codemirror", "CodeMirror/mode/htmlmixed/htmlmixed"
	], function (CodeMirror) {
	var editor0 = CodeMirror.fromTextArea(document.getElementById("code0"), {
			lineNumbers : true,
			mode : "htmlmixed"
		});

	editor0.setOption("theme", 'solarized');
	editor0.setOption("readOnly", true);

	var editor2 = CodeMirror.fromTextArea(document.getElementById("code2"), {
			lineNumbers : true,
			mode : "htmlmixed"
		});

	editor2.setOption("theme", 'solarized');
	editor2.setOption("readOnly", true);

});

require([
		"CodeMirror/lib/codemirror", "CodeMirror/mode/javascript/javascript.js"
	], function (CodeMirror) {

	var editor1 = CodeMirror.fromTextArea(document.getElementById("code1"), {
			lineNumbers : true,
			mode : "javascript"
		});
	editor1.setOption("theme", 'solarized');
	editor1.setOption("readOnly", true);

	var editor3 = CodeMirror.fromTextArea(document.getElementById("code3"), {
			lineNumbers : true,
			mode : "javascript"
		});
	editor3.setOption("theme", 'solarized');
	editor3.setOption("readOnly", true);
});

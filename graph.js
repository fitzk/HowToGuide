window.onload = function () {
	genGraph();
}

function genGraph() {
	var site2 = "https://api.github.com/repos/atom/atom/stats/participation";
	var website = "https://api.github.com/repos/mbostock/d3/stats/participation";
	d3.json(site2, function (error, data) {

		if (error) {
			console.log("Error occured: ", error);
		}

		var all = data["all"];
		// Set the dimensions of the canvas / graph

		var margin = {
			top : 30,
			right : 20,
			bottom : 30,
			left : 50
		},
		width = 600 - margin.left - margin.right,
		height = 270 - margin.top - margin.bottom;

		// Set the ranges
		var x = d3.scale.linear().domain([0, all.length]).range([0, width]);
		var y = d3.scale.linear().domain([0, d3.max(all)])
			.rangeRound([height, 0]);

		// Define the axes
		var xAxis = d3.svg.axis().scale(x)
			.orient("bottom").ticks(10);

		var yAxis = d3.svg.axis().scale(y)
			.orient("left").ticks(10);

		// Define the line
		var valueline = d3.svg.line()
			.x(function (value, index) {
				return x(index);
			})
			.y(function (value, index) {
				return y(value);
			});

		// Adds the svg canvas
		var svg = d3.select("section")
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform",
				"translate(" + margin.left + "," + margin.top + ")");

		// Add the valueline path.
		svg.append("path")
		.attr("class", "line")
		.attr("d", valueline(all));

		// Add the X Axis
		svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

		// Add the Y Axis
		svg.append("g")
		.attr("class", "y axis")
		.call(yAxis);
	});
}

let test = require('tape');
let d3X3dom = require("../../");

test("Test Multi Series Bars Component, component.barMultiSeries()", function(t) {
	let barsMultiSeries = d3X3dom.component.barsMultiSeries();

	// Test dimensions getter / setter function
	t.deepEqual(barsMultiSeries.dimensions(), { x: 40, y: 40, z: 40 }, "Returns default dimensions");
	barsMultiSeries.dimensions({ x: 20, y: 20, z: 10 });
	t.deepEqual(barsMultiSeries.dimensions(), { x: 20, y: 20, z: 10 }, "Dimensions changed");

	// Test xScale getter / setter function
	t.deepEqual(barsMultiSeries.xScale(), undefined, "xScale is undefined");
	barsMultiSeries.xScale(0.2);
	t.deepEqual(barsMultiSeries.xScale(), 0.2, "xScale changed");

	// Test yScale getter / setter function
	t.deepEqual(barsMultiSeries.yScale(), undefined, "yScale is undefined");
	barsMultiSeries.yScale(0.1);
	t.deepEqual(barsMultiSeries.yScale(), 0.1, "yScale changed");

	// Test zScale getter / setter function
	t.deepEqual(barsMultiSeries.zScale(), undefined, "zScale is undefined");
	barsMultiSeries.zScale(0.1);
	t.deepEqual(barsMultiSeries.zScale(), 0.1, "zScale changed");

	// Test colorScale getter / setter function
	t.deepEqual(barsMultiSeries.colorScale(), undefined, "colorScale is undefined");
	barsMultiSeries.colorScale(2);
	t.deepEqual(barsMultiSeries.colorScale(), 2, "colorScale changed");

	// Test colors getter / setter function
	t.deepEqual(barsMultiSeries.colors(), ["orange", "red", "yellow", "steelblue", "green"], "Returns default colors");
	barsMultiSeries.colors(["red", "blue", "orange", "cyna", "green"]);
	t.deepEqual(barsMultiSeries.colors(), ["red", "blue", "orange", "cyna", "green"], "Bar color changed");

	t.end();
});

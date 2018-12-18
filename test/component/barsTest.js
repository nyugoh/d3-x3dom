let test = require('tape');
let d3X3dom = require("../../");

test("Test Bars Component, component.bars()", function(t) {
	let bars = d3X3dom.component.bars();

	// Test dimensions getter / setter function
	t.deepEqual(bars.dimensions(), { x: 40, y: 40, z: 2 }, "Returns default dimensions");
	bars.dimensions({ x: 20, y: 20, z: 1 });
	t.deepEqual(bars.dimensions(), { x: 20, y: 20, z: 1 }, "Dimensions changed");

	// Test xScale getter / setter function
	t.deepEqual(bars.xScale(), undefined, "xScale is undefined");
	bars.xScale(0.2);
	t.deepEqual(bars.xScale(), 0.2, "xScale changed");

	// Test yScale getter / setter function
	t.deepEqual(bars.yScale(), undefined, "yScale is undefined");
	bars.yScale(0.1);
	t.deepEqual(bars.yScale(), 0.1, "yScale changed");

	// Test colorScale getter / setter function
	t.deepEqual(bars.colorScale(), undefined, "colorScale is undefined");
	bars.colorScale(2);
	t.deepEqual(bars.colorScale(), 2, "colorScale changed");

	// Test colors getter / setter function
	t.deepEqual(bars.colors(), ["orange", "red", "yellow", "steelblue", "green"], "Returns default colors");
	bars.colors(["red", "blue", "orange", "cyan", "green"]);
	t.deepEqual(bars.colors(), ["red", "blue", "orange", "cyan", "green"], "Bars color changed");

	t.end();
});

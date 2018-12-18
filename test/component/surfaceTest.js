let test = require('tape');
let d3X3dom = require("../../");

test("Test Surface Area Component, component.surface()", function(t) {
	let surfaceArea = d3X3dom.component.surface();

	// Test dimensions getter / setter function
	t.deepEqual(surfaceArea.dimensions(), { x: 40, y: 40, z: 40 }, "Returns default dimensions");
	surfaceArea.dimensions({ x: 10, y: 20, z: 30 });
	t.deepEqual(surfaceArea.dimensions(), { x: 10, y: 20, z: 30 }, "Dimensions changed");

	// Test xScale getter / setter function
	t.deepEqual(surfaceArea.xScale(), undefined, "xScale is undefined");
	surfaceArea.xScale(0.2);
	t.deepEqual(surfaceArea.xScale(), 0.2, "xScale changed");

	// Test yScale getter / setter function
	t.deepEqual(surfaceArea.yScale(), undefined, "yScale is undefined");
	surfaceArea.yScale(0.1);
	t.deepEqual(surfaceArea.yScale(), 0.1, "yScale changed");

	// Test zScale getter / setter function
	t.deepEqual(surfaceArea.zScale(), undefined, "zScale is undefined");
	surfaceArea.zScale(0.2);
	t.deepEqual(surfaceArea.zScale(), 0.2, "zScale changed");

	// Test colorScale getter / setter function
	t.deepEqual(surfaceArea.colorScale(), undefined, "colorScale is undefined");
	surfaceArea.colorScale(2);
	t.deepEqual(surfaceArea.colorScale(), 2, "colorScale changed");

	// Test colors getter / setter function
	t.deepEqual(surfaceArea.colors(), ["blue", "red"], "Returns default colors, blue & red");
	surfaceArea.colors(["orange", "green"]);
	t.deepEqual(surfaceArea.colors(), ["orange", "green"], "default color changed");

	t.end();
});

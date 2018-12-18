let test = require('tape');
let d3X3dom = require("../../");

test("Test Three Plane Axis Component, component.axisThreePlane()", function(t) {
	let axisThreePlane = d3X3dom.component.axisThreePlane();

	// Test dimensions getter / setter function
	t.deepEqual(axisThreePlane.dimensions(), { x: 40, y: 40, z: 40 }, "Returns default dimensions");
	axisThreePlane.dimensions({ x: 10, y: 20, z: 30 });
	t.deepEqual(axisThreePlane.dimensions(), { x: 10, y: 20, z: 30 }, "Dimensions changed");

	// Test xScale getter / setter function
	t.deepEqual(axisThreePlane.xScale(), undefined, "xScale is undefined");
	axisThreePlane.xScale(0.2);
	t.deepEqual(axisThreePlane.xScale(), 0.2, "xScale changed");

	// Test yScale getter / setter function
	t.deepEqual(axisThreePlane.yScale(), undefined, "yScale is undefined");
	axisThreePlane.yScale(0.1);
	t.deepEqual(axisThreePlane.yScale(), 0.1, "yScale changed");

	// Test zScale getter / setter function
	t.deepEqual(axisThreePlane.zScale(), undefined, "zScale is undefined");
	axisThreePlane.zScale(0.2);
	t.deepEqual(axisThreePlane.zScale(), 0.2, "zScale changed");

	// Test colorScale getter / setter function
	t.deepEqual(axisThreePlane.colorScale(), undefined, "colorScale is undefined");
	axisThreePlane.colorScale(2);
	t.deepEqual(axisThreePlane.colorScale(), 2, "colorScale changed");

	// Test colors getter / setter function
	t.deepEqual(axisThreePlane.colors(), ["blue", "red", "green"], "Returns default colors");
	axisThreePlane.colors(["yellow", "blue", "green"]);
	t.deepEqual(axisThreePlane.colors(), ["yellow", "blue", "green"], "Axis colors changed");

	t.end();
});

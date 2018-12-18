let test = require('tape');
let d3X3dom = require("../../");

test("Test Bubbles Component, component.bubbles()", function(t) {
	let bubbles = d3X3dom.component.bubbles();

	// Test dimensions getter / setter function
	t.deepEqual(bubbles.dimensions(), { x: 40, y: 40, z: 40 }, "Returns default dimensions");
	bubbles.dimensions({ x: 10, y: 20, z: 30 });
	t.deepEqual(bubbles.dimensions(), { x: 10, y: 20, z: 30 }, "Dimensions changed");

	// Test xScale getter / setter function
	t.deepEqual(bubbles.xScale(), undefined, "xScale is undefined");
	bubbles.xScale(0.2);
	t.deepEqual(bubbles.xScale(), 0.2, "xScale changed");

	// Test yScale getter / setter function
	t.deepEqual(bubbles.yScale(), undefined, "yScale is undefined");
	bubbles.yScale(0.1);
	t.deepEqual(bubbles.yScale(), 0.1, "yScale changed");

	// Test zScale getter / setter function
	t.deepEqual(bubbles.zScale(), undefined, "zScale is undefined");
	bubbles.zScale(0.2);
	t.deepEqual(bubbles.zScale(), 0.2, "zScale changed");

	// Test sizeScale getter / setter function
	t.deepEqual(bubbles.sizeScale(), undefined, "size scale is undefined");
	bubbles.sizeScale(2);
	t.deepEqual(bubbles.sizeScale(), 2, "size scale changed");

	// Test sizeDomain getter / setter function
	t.deepEqual(bubbles.sizeDomain(), [0.5, 4.0], "size domain default is [0.5, 4.0]");
	bubbles.sizeDomain([0.2, 5.0]);
	t.deepEqual(bubbles.sizeDomain(), [0.2, 5.0], "size domain changed");

	// Test color getter / setter function
	t.deepEqual(bubbles.color(), "orange", "Returns default color");
	bubbles.color("yellow");
	t.deepEqual(bubbles.color(), "yellow", "Bubbles color changed");

	t.end();
});

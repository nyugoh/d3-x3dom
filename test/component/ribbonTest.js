let test = require('tape');
let d3X3dom = require("../../");

test("Test Ribbon Component, component.ribbon()", function(t) {
	let ribbon = d3X3dom.component.ribbon();

	// Test dimensions getter / setter function
	t.deepEqual(ribbon.dimensions(), { x: 40, y: 40, z: 5 }, "Returns default dimensions");
	ribbon.dimensions({ x: 80, y: 40, z: 10 });
	t.deepEqual(ribbon.dimensions(), { x: 80, y: 40, z: 10 }, "Dimensions changed");

	// Test xScale getter / setter function
	t.deepEqual(ribbon.xScale(), undefined, "xScale is undefined");
	ribbon.xScale(0.2);
	t.deepEqual(ribbon.xScale(), 0.2, "xScale changed");

	// Test yScale getter / setter function
	t.deepEqual(ribbon.yScale(), undefined, "yScale is undefined");
	ribbon.yScale(0.1);
	t.deepEqual(ribbon.yScale(), 0.1, "yScale changed");

	// Test color getter / setter function
	t.deepEqual(ribbon.color(), "red", "Default color is red");
	ribbon.color("steelblue");
	t.deepEqual(ribbon.color(), "steelblue", "Default color changed to steelblue");

	t.end();
});

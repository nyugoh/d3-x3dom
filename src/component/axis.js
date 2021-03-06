import * as d3 from "d3";

/**
 * Reusable 3D Axis Component
 *
 * @module
 */
export default function() {

	/* Default Properties */
	let dimensions = { x: 40, y: 40, z: 40 };
	let color = "black";
	let classed = "x3dAxis";

	/* Scale and Axis Options */
	let scale;
	let dir;
	let tickDir;
	let tickArguments = [];
	let tickValues = null;
	let tickFormat = null;
	let tickSize = 1;
	let tickPadding = 1;

	const axisDirectionVectors = {
		x: [1, 0, 0],
		y: [0, 1, 0],
		z: [0, 0, 1]
	};

	const axisRotationVectors = {
		x: [1, 1, 0, Math.PI],
		y: [0, 0, 0, 0],
		z: [0, 1, 1, Math.PI]
	};

	/**
	 * Get Axis Direction Vector
	 *
	 * @private
	 * @param {string} axisDir
	 * @returns {number[]}
	 */
	function getAxisDirectionVector(axisDir) {
		return axisDirectionVectors[axisDir];
	}

	/**
	 * Get Axis Rotation Vector
	 *
	 * @private
	 * @param {string} axisDir
	 * @returns {number[]}
	 */
	function getAxisRotationVector(axisDir) {
		return axisRotationVectors[axisDir];
	}

	/**
	 * Constructor
	 *
	 * @constructor
	 * @alias axis
	 * @param {d3.selection} selection - The chart holder D3 selection.
	 */
	function my(selection) {
		selection.classed(classed, true);

		const makeSolid = (selection, color) => {
			selection.append("appearance")
				.append("material")
				.attr("diffuseColor", color || "black");

			return selection;
		};

		const range = scale.range();
		const range0 = range[0];
		const range1 = range[range.length - 1];

		const dirVec = getAxisDirectionVector(dir);
		const tickDirVec = getAxisDirectionVector(tickDir);
		const rotVec = getAxisRotationVector(dir);
		const tickRotVec = getAxisRotationVector(tickDir);

		let path = selection.selectAll("transform")
			.data([null]);

		const tickValuesDefault = scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain();
		tickValues = tickValues === null ? tickValuesDefault : tickValues;

		let tick = selection.selectAll(".tick")
			.data(tickValues, scale).order();

		const tickExit = tick.exit();
		const tickEnter = tick.enter()
			.append("transform")
			.attr("translation", (t) => (dirVec.map((a) => (scale(t) * a)).join(" ")))
			.attr("class", "tick");

		let line = tick.select(".tickLine");
		path = path.merge(path.enter()
			.append("transform")
			.attr("rotation", rotVec.join(" "))
			.attr("translation", dirVec.map((d) => (d * (range0 + range1) / 2)).join(" "))
			.append("shape")
			.call(makeSolid, color)
			.attr("class", "domain"));
		tick = tick.merge(tickEnter);
		line = line.merge(tickEnter.append("transform"));

		const tickFormatDefault = scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : (d) => d;
		tickFormat = tickFormat === null ? tickFormatDefault : tickFormat;

		if (tickFormat !== "") {
			let text = tick.select("billboard");
			let newText = tickEnter.append("transform");
			newText
				.attr("translation", tickDirVec.map((d) => (-d * tickPadding)))
				.append("billboard")
				.attr("axisOfRotation", "0 0 0")
				.append("shape")
				.call(makeSolid, "black")
				.append("text")
				.attr("string", tickFormat)
				.append("fontstyle")
				.attr("size", 1.3)
				.attr("family", "SANS")
				.attr("style", "BOLD")
				.attr("justify", "MIDDLE");
			text = text.merge(newText);
		}

		tickExit.remove();
		path
			.append("cylinder")
			.attr("radius", 0.1)
			.attr("height", range1 - range0);

		line
			.attr("translation", tickDirVec.map((d) => (d * tickSize / 2)).join(" "))
			.attr("rotation", tickRotVec.join(" "))
			.attr("class", "tickLine")
			.append("shape")
			.call(makeSolid)
			.append("cylinder")
			.attr("radius", 0.05)
			.attr("height", tickSize);
	}

	/**
	 * Dimensions Getter / Setter
	 *
	 * @param {{x: number, y: number, z: number}} _v - 3D object dimensions.
	 * @returns {*}
	 */
	my.dimensions = function(_v) {
		if (!arguments.length) return dimensions;
		dimensions = _v;
		return my;
	};

	/**
	 * Scale Getter / Setter
	 *
	 * @param {d3.scale} _v - D3 Scale.
	 * @returns {*}
	 */
	my.scale = function(_v) {
		if (!arguments.length) return scale;
		scale = _v;
		return my;
	};

	/**
	 * Direction Getter / Setter
	 *
	 * @param {string} _v - Direction of Axis (e.g. 'x', 'y', 'z').
	 * @returns {*}
	 */
	my.dir = function(_v) {
		if (!arguments.length) return dir;
		dir = _v;
		return my;
	};

	/**
	 * Tick Direction Getter / Setter
	 *
	 * @param {string} _v - Direction of Ticks (e.g. 'x', 'y', 'z').
	 * @returns {*}
	 */
	my.tickDir = function(_v) {
		if (!arguments.length) return tickDir;
		tickDir = _v;
		return my;
	};

	/**
	 * Tick Arguments Getter / Setter
	 *
	 * @param {Array} _v - Tick arguments.
	 * @returns {Array<*>}
	 */
	my.tickArguments = function(_v) {
		if (!arguments.length) return tickArguments;
		tickArguments = _v;
		return my;
	};

	/**
	 * Tick Values Getter / Setter
	 *
	 * @param {Array} _v - Tick values.
	 * @returns {*}
	 */
	my.tickValues = function(_v) {
		if (!arguments.length) return tickValues;
		tickValues = _v;
		return my;
	};

	/**
	 * Tick Format Getter / Setter
	 *
	 * @param {string} _v - Tick format.
	 * @returns {*}
	 */
	my.tickFormat = function(_v) {
		if (!arguments.length) return tickFormat;
		tickFormat = _v;
		return my;
	};

	/**
	 * Tick Size Getter / Setter
	 *
	 * @param {number} _v - Tick length.
	 * @returns {*}
	 */
	my.tickSize = function(_v) {
		if (!arguments.length) return tickSize;
		tickSize = _v;
		return my;
	};

	/**
	 * Tick Padding Getter / Setter
	 *
	 * @param {number} _v - Tick padding size.
	 * @returns {*}
	 */
	my.tickPadding = function(_v) {
		if (!arguments.length) return tickPadding;
		tickPadding = _v;
		return my;
	};

	/**
	 * Color Getter / Setter
	 *
	 * @param {string} _v - Color (e.g. 'red' or '#ff0000').
	 * @returns {*}
	 */
	my.color = function(_v) {
		if (!arguments.length) return color;
		color = _v;
		return my;
	};

	return my;
}

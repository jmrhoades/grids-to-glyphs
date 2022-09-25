const scale = window.devicePixelRatio;

const grid = {
	unit: 20,
	ratio: 6,
	capHeight: 2,
	paddingX: 1,
	paddingY: 1,
};

const squareCanvasWidth = grid.unit * grid.ratio + grid.unit * grid.paddingX * 2;
const squareCanvasHeight = grid.unit * grid.ratio + grid.unit * grid.paddingY * 2;
const canvasHeight = ((grid.unit * grid.ratio) * grid.capHeight) + grid.unit * grid.paddingY * 2;

const init = () => {
	initC1();
	initC2();
	initC3();
	initC4();
    initC5();
    initC6();
};

const initC1 = () => {
	utils.setCanvasSize("c1", squareCanvasWidth, squareCanvasHeight);
	const c = document.getElementById("c1");
	const ctx = c.getContext("2d");

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000000";
	draw.rect(ctx, grid.paddingX * grid.unit, grid.paddingY * grid.unit, grid.unit * grid.ratio, grid.unit * grid.ratio);
};

const initC2 = () => {
	utils.setCanvasSize("c2", squareCanvasWidth, squareCanvasHeight);
	const c = document.getElementById("c2");
	const ctx = c.getContext("2d");

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000000";

	for (let i = 0; i < grid.ratio; i++) {
		for (let j = 0; j < grid.ratio; j++) {
			draw.rect(
				ctx,
				grid.paddingX * grid.unit + grid.unit * j,
				grid.paddingY * grid.unit + grid.unit * i,
				grid.unit,
				grid.unit
			);
		}
	}
};

const initC3 = () => {
	utils.setCanvasSize("c3", squareCanvasWidth, squareCanvasHeight);
	const c = document.getElementById("c3");
	const ctx = c.getContext("2d");

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000000";
	draw.rect(ctx, grid.unit, grid.unit, grid.unit * grid.ratio, grid.unit * grid.ratio);

	const gap = grid.unit / 5;
	const lengths = [0.6, 0.2, 0.4, 0.6, 0.4, 0.2, 0.6];

	// Top lines
	for (let i = 0; i <= grid.ratio; i++) {
		const x = i * grid.unit + grid.unit;
		draw.line(ctx, x, grid.paddingY * grid.unit - gap, x, grid.paddingY * grid.unit - gap - lengths[i] * grid.unit);
	}

	// Side lines
	for (let j = 0; j <= grid.ratio; j++) {
		const y = j * grid.unit + grid.unit;
		const x = squareCanvasWidth - grid.paddingX * grid.unit + gap;
		draw.line(ctx, x, y, x + lengths[j] * grid.unit, y);
	}

	// Center cross
	let x = (grid.unit * grid.ratio) / 2 + grid.paddingX * grid.unit;
	let y = (grid.unit * grid.ratio) / 2 + grid.paddingY * grid.unit;
	draw.line(ctx, x, y - grid.unit / 2, x, y + grid.unit / 2);
	draw.line(ctx, x - grid.unit / 2, y, x + grid.unit / 2, y);
};

const initC4 = () => {
	utils.setCanvasSize("c4", squareCanvasWidth, squareCanvasHeight);
	const c = document.getElementById("c4");
	const ctx = c.getContext("2d");

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000";
	draw.rect(ctx, grid.unit, grid.unit, grid.unit * grid.ratio, grid.unit * grid.ratio);

	const gap = grid.unit / 5;
	const lengths = [0.6, 0.2, 0.4, 0.6, 0.4, 0.2, 0.6];

	// Top lines
	for (let i = 0; i <= grid.ratio; i++) {
		const x = i * grid.unit + grid.unit;
		draw.line(ctx, x, grid.paddingY * grid.unit - gap, x, grid.paddingY * grid.unit - gap - lengths[i] * grid.unit);
	}

	// Side lines
	for (let j = 0; j <= grid.ratio; j++) {
		const y = j * grid.unit + grid.unit;
		const x = squareCanvasWidth - grid.paddingX * grid.unit + gap;
		draw.line(ctx, x, y, x + lengths[j] * grid.unit, y);
	}

	// Center cross
	let x = (grid.unit * grid.ratio) / 2 + grid.paddingX * grid.unit;
	let y = (grid.unit * grid.ratio) / 2 + grid.paddingY * grid.unit;
	draw.line(ctx, x, y - grid.unit / 2, x, y + grid.unit / 2);
	draw.line(ctx, x - grid.unit / 2, y, x + grid.unit / 2, y);

	// Circles
    ctx.beginPath()
	ctx.lineWidth = 1;
	ctx.strokeStyle = "000";
	draw.circle(
        ctx,
		(grid.unit * grid.ratio) / 3 + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3
	);
    ctx.beginPath()
    draw.circle(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3
	);
    ctx.beginPath()
    draw.circle(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3
	);
    ctx.beginPath()
    draw.circle(
        ctx,
		(grid.unit * (grid.ratio*1/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3
	);
};


const initC5 = () => {
	utils.setCanvasSize("c5", squareCanvasWidth, squareCanvasHeight);
	const c = document.getElementById("c5");
	const ctx = c.getContext("2d");

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000";
	draw.rect(ctx, grid.unit, grid.unit, grid.unit * grid.ratio, grid.unit * grid.ratio);

	const gap = grid.unit / 5;
	const lengths = [0.6, 0.2, 0.4, 0.6, 0.4, 0.2, 0.6];

	// Top lines
	for (let i = 0; i <= grid.ratio; i++) {
		const x = i * grid.unit + grid.unit;
		draw.line(ctx, x, grid.paddingY * grid.unit - gap, x, grid.paddingY * grid.unit - gap - lengths[i] * grid.unit);
	}

	// Side lines
	for (let j = 0; j <= grid.ratio; j++) {
		const y = j * grid.unit + grid.unit;
		const x = squareCanvasWidth - grid.paddingX * grid.unit + gap;
		draw.line(ctx, x, y, x + lengths[j] * grid.unit, y);
	}

	// Center cross
	let x = (grid.unit * grid.ratio) / 2 + grid.paddingX * grid.unit;
	let y = (grid.unit * grid.ratio) / 2 + grid.paddingY * grid.unit;
	draw.line(ctx, x, y - grid.unit / 2, x, y + grid.unit / 2);
	draw.line(ctx, x - grid.unit / 2, y, x + grid.unit / 2, y);

	// Circles
    ctx.beginPath()
	ctx.lineWidth = 1;
	ctx.strokeStyle = "000";
	draw.arc(
        ctx,
		(grid.unit * grid.ratio) / 3 + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        Math.PI,
        1.5 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        1.5 * Math.PI,
        2 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        0,
        0.5 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*1/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        0.5 * Math.PI,
        1 * Math.PI,
	);
};


const initC6 = () => {
	utils.setCanvasSize("c6", squareCanvasWidth, canvasHeight);
	const c = document.getElementById("c6");
	const ctx = c.getContext("2d");
    const y2 =  grid.unit * grid.ratio;
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000";
	draw.rect(ctx, grid.unit, grid.unit, grid.unit * grid.ratio, grid.unit * grid.ratio);
    draw.rect(ctx, grid.unit, grid.unit + y2, grid.unit * grid.ratio, grid.unit * grid.ratio);

	const gap = grid.unit / 5;
	const lengths = [0.6, 0.2, 0.4, 0.6, 0.4, 0.2, 0.6];

	// Top lines
	for (let i = 0; i <= grid.ratio; i++) {
		const x = i * grid.unit + grid.unit;
		draw.line(ctx, x, grid.paddingY * grid.unit - gap, x, grid.paddingY * grid.unit - gap - lengths[i] * grid.unit);
	}

	// Side lines
	for (let j = 0; j <= grid.ratio; j++) {
		const y = j * grid.unit + grid.unit;
		const x = squareCanvasWidth - grid.paddingX * grid.unit + gap;
		draw.line(ctx, x, y, x + lengths[j] * grid.unit, y);
	}
    for (let j = 0; j <= grid.ratio; j++) {
		const y = j * grid.unit + grid.unit + y2;
		const x = squareCanvasWidth - grid.paddingX * grid.unit + gap;
		draw.line(ctx, x, y, x + lengths[j] * grid.unit, y);
	}

	// Center cross
	let x = (grid.unit * grid.ratio) / 2 + grid.paddingX * grid.unit;
	let y = (grid.unit * grid.ratio) / 2 + grid.paddingY * grid.unit;
	draw.line(ctx, x, y - grid.unit / 2, x, y + grid.unit / 2);
	draw.line(ctx, x - grid.unit / 2, y, x + grid.unit / 2, y);

    // Center cross
	x = (grid.unit * grid.ratio) / 2 + grid.paddingX * grid.unit;
	y = (grid.unit * grid.ratio) / 2 + grid.paddingY * grid.unit + y2;
	draw.line(ctx, x, y - grid.unit / 2, x, y + grid.unit / 2);
	draw.line(ctx, x - grid.unit / 2, y, x + grid.unit / 2, y);

	// Circles
    ctx.beginPath()
	ctx.lineWidth = 1;
	ctx.strokeStyle = "000";
	draw.arc(
        ctx,
		(grid.unit * grid.ratio) / 3 + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        Math.PI,
        1.5 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        1.5 * Math.PI,
        2 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        0,
        0.5 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*1/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit,
		(grid.unit * grid.ratio) / 3,
        0.5 * Math.PI,
        1 * Math.PI,
	);

    // Circles
    ctx.beginPath()
	ctx.lineWidth = 1;
	ctx.strokeStyle = "000";
	draw.arc(
        ctx,
		(grid.unit * grid.ratio) / 3 + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit + y2,
		(grid.unit * grid.ratio) / 3,
        Math.PI,
        1.5 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * grid.ratio) / 3 + grid.paddingY * grid.unit + y2,
		(grid.unit * grid.ratio) / 3,
        1.5 * Math.PI,
        2 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit + y2,
		(grid.unit * grid.ratio) / 3,
        0,
        0.5 * Math.PI,
	);
    ctx.beginPath()
    draw.arc(
        ctx,
		(grid.unit * (grid.ratio*1/3)) + grid.paddingX * grid.unit,
		(grid.unit * (grid.ratio*2/3)) + grid.paddingY * grid.unit + y2,
		(grid.unit * grid.ratio) / 3,
        0.5 * Math.PI,
        1 * Math.PI,
	);
};


const utils = {
	setCanvasSize: (canvasId, width, height) => {
		const c = document.getElementById(canvasId);
		const ctx = c.getContext("2d");
		ctx.scale(scale, scale);
		c.width = width * scale;
		c.style.width = width + "px";
		c.height = height * scale;
		c.style.height = height + "px";
	},
};

const draw = {
	rect: (ctx, x, y, w, h) => {
		ctx.strokeRect(x * scale, y * scale, w * scale, h * scale);
	},
	line: (ctx, x1, y1, x2, y2) => {
		ctx.moveTo(x1 * scale, y1 * scale);
		ctx.lineTo(x2 * scale, y2 * scale);
		ctx.stroke();
	},
	circle: (ctx, x, y, r) => {
		ctx.arc(x * scale, y * scale, r * scale, 0, 2 * Math.PI);
		ctx.stroke();
	},
    arc: (ctx, x, y, r, start, end) => {
		ctx.arc(x * scale, y * scale, r * scale, start, end);
		ctx.stroke();
	},
};

const yell = (inpu) => {
	let arr = [];
	for (let i = 0; i < inpu.length; i++) {
		arr.push(inpu[i] + '!');
	}
	console.log(arr);
};

// let input = ['think', 'its', 'working'];

// yell(input);

const elementTimesIndex = (arr) => {
	let ret = [];

	for (let i = 0; i < arr.length; i++) {
		ret.push(arr[i] * i);
	}
	console.log(ret);
};

// let input = [5, 2, 7, 8, 0];

// elementTimesIndex(input);

const evenNums = (num) => {
	let arr = [];
	for (let i = 0; i <= num; i++) {
		if (i % 2 === 0) {
			arr.push(i);
		}
	}

	console.log(arr);
};

// evenNums(9);

const oddRange = (min, max) => {
	let arr = [];
	for (let i = min; i <= max; i++) {
		if (i % 2 != 0) {
			arr.push(i);
		}
	}
	console.log(arr);
};

// oddRange(1, 19);

const reverseRange = (min, max) => {
	let arr = [];
	for (let i = max - 1; i > min; i--) {
		if (i % 2 != 0) {
			arr.push(i);
		}
	}
	console.log(arr);
};

// reverseRange(1, 9);

const firstHalf = (arr) => {
	let num = (arr.length + 1) / 2;

	console.log(arr.slice(0, num), num);
};

// firstHalf([1, 2, 3, 4]);

const factorsOf = (num) => {
	let arr = [];
	for (let i = 0; i < num + 1; i++) {
		if (num % i === 0) {
			arr.push(i);
		}
	}
	console.log(arr);
};

// factorsOf(4);

const sumElements = (arr1, arr2) => {
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		arr.push(arr1[i] + arr2[i]);
	}
	console.log(arr);
};

// let a1 = ['joe', 'mike', 'tony'];
// let a2 = ['y', 'y', 'yyy'];

// sumElements(a1, a2);

const fizzBuzz = (max) => {
	let arr = [];

	for (let i = 1; i < max; i++) {
		if ((i % 4 === 0 || i % 6 === 0) && !(i % 4 === 0 && i % 6 === 0)) {
			arr.push(i);
		}
	}

	console.log(arr);
};

fizzBuzz(13);

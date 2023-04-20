# simple-linalg

Simple Linear algebra function in JS

## Installation

```
npm install simple-linalg
```

## Motivation

This is a spin-off project from [Kalman Filter](https://github.com/piercus/kalman-filter)

Basic ideas are : 
* KISS : Keep it simple and stupid
* Pure functionnal library
* Native JS Array manipulation
* Small footprint (only deps is [matrix-inverse](https://www.npmjs.com/package/matrix-inverse))


## Examples

### add

```js
const {add} = require('simple-linalg');
const a = [[3, 7], [4, 9]];
const b = [[6, 2], [5, 8]];

add(a, b) 
// => [[9, 9], [9, 17]];

```
### diag

```js
const {diag} = require('simple-linalg');

diag([3, 7]) 
// => [[3, 0], [7, 0]];
```
### frobenius

```js
const {frobenius} = require('simple-linalg');

const a = [[3, 7], [4, 9]];
const b = [[6, 2], [5, 8]];

frobenius(a, b) 
// => 6
```

### elemWise

```js
const {elemWise} = require('simple-linalg');

const a = [[3, 7], [4, 9]];
const b = [[6, 2], [5, 8]];

let sum = 0;
elemWise([a,b], function(list, rowId, colId){
	const [aValue, bValue] = list;
	sum += aValue+bValue;
	// you can use rowId and colId here
}) 

// sum is 44
```

### identity

```js
const {identity} = require('simple-linalg');

identity(2) 

// [[1,0],[0,1]]
```

### identity

```js
const {invert} = require('simple-linalg');

identity(2) 

// [[1,0],[0,1]]
```
### invert

```js
const {invert} = require('simple-linalg');

const a = [[3, 7], [4, 9]];
invert(a) 
```
### matMul
```js
const {matMul} = require('simple-linalg');
const a = [[3, 7], [4, 9]];
const b = [[6, 2], [5, 8]];

matMul(a, b) 
// => [[53, 62], [69, 80]];

```
### padWithZeroCols
```js
const {padWithZeroCols} = require('simple-linalg');
const a = [[3, 7], [4, 9]];

padWithZeroCols(a, {columns: 4}) 
// => [[3, 7, 0, 0], [4, 9, 0, 0]];

```

### substract
```js
const {substract} = require('simple-linalg');

const a = [[3, 7], [4, 9]];
const b = [[6, 2], [5, 8]];

sub(a, b) 
// => [[-3, 5], [-1, 1]];

```

### subSquareMatrix
```js
const {subSquareMatrix} = require('simple-linalg');

const a = [[3, 7, 4, 5], [4, 9, 8, 7], [8, 7, 2, -1]];

subSquareMatrix(a, [0, 2]) 
// => [[3, 4], [8, 2]];
```

### sum
```js
const {sum} = require('simple-linalg');

const a = [[3, 7], [4, 9]];
sum(a)

// => 23;
```


### trace
```js
const {trace} = require('simple-linalg');

const a = [[3, 7], [4, 9]];
trace(a)

// => 7;
```

### transpose
```js
const {transpose} = require('simple-linalg');

const a = [[3, 7], [4, 9]];
transpose(a)

// => [[3, 9], [4, 7]];
```

### zeros
```js
const {zeros} = require('simple-linalg');

zeros(2)

// => [[0, 0], [0, 0]];
```

### Going further

This library is not optimized for performance or complex usage
If you want to focus on performance, I would suggest moving to Native C-bindings.
For example [opencv4nodejs](https://github.com/UrielCh/opencv4nodejs)
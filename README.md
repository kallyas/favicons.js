![Node.js CI](https://github.com/kallyas/favicons.js/workflows/Node.js%20CI/badge.svg) [![Build Status](https://travis-ci.com/kallyas/favicons.js.svg?branch=master)](https://travis-ci.com/kallyas/favicons.js) [![CircleCI](https://circleci.com/gh/kallyas/favicons.js.svg?style=svg)](https://app.circleci.com/pipelines/github/kallyas/favicons.js) [![Maintainability](https://api.codeclimate.com/v1/badges/cad1e9721782a2b601ce/maintainability)](https://codeclimate.com/github/kallyas/favicons.js/maintainability) [![Build Status](https://semaphoreci.com/api/v1/kallyas/favicons-js/branches/master/badge.svg)](https://semaphoreci.com/kallyas/favicons-js)

# favicons.js

Given a HTML5 canvas return an ICO formatted favicon.

Usage
Generate ICO
Generate an ICO file from a <canvas> element. Initialize a Favicon.Ico object with a canvas element. The canvas should be square for best results. Pass the generate method an array of sizes that the (layered) ICO file should contain.

```js
const ico = new Favicon.Ico(canvas);
const dataurl = ico.generate([16, 32, 48]);
```

## Generate PNG

Generate a PNG file from a canvas element. Initialize a Favicon.Png object with a canvas element. The canvas should be square for best results. Pass the generate method the size that should be generated.

```js
const png = new Favicon.Png(canvas);
const dataurl = png.generate(32);
```

## Generate Package

Generate multiple favicon format based on current best practices. Pass Favicon.Package a canvas element and it will return a dictionary of dataurls.

```js
let package = Favicon.Package(canvas);
```

The package will contain the follow keys which map to common favicon formats.

```js
ico - favicon.ico
png16 - favicon-16x16.png
png32 - favicon-32x32.png
png180 - apple-touch-icon.png
png192 - android-chrome-192x192.png
png512 - android-chrome-512x512.png
```

## Example

The example below will generate an ICO formatted favicon that includes 3 sizes: 16x16, 32x32, and 48x48 pixels. The full example can be found here.

## Preview

```js
// Setup canvas
const canvas = document.getElementById("canvas");
canvas.width = 128;
canvas.height = 128;
const context = canvas.getContext("2d");

// Draw background
context.fillStyle = "#d85537";
context.fillRect(0, 0, canvas.width, canvas.height);

// Draw text
context.fillStyle = "#FFFFFF";
context.font = "100px Helvetica";
context.textBaseline = "middle";
context.textAlign = "center";
const x = canvas.width / 2;
const y = canvas.height / 2;
context.fillText("F", x, y);

// Create favicon.ico dataurl
const ico = new Favicon.Ico(canvas);
const dataurl = ico.generate([16, 32, 48]);

// Activate the download button
const download = document.getElementById("download");
download.href = dataurl;
download.setAttribute("download", "favicon.ico");
```

### Licence

MIT

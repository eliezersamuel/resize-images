const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const argv = require('minimist')(process.argv.slice(2));

const filePath = process.argv[2];
const sizes =
argv['size']
.split(',')
.map( size => Number(size));

const format = argv['format'].toLowerCase();

const dirname = path.dirname(filePath);
const [filename] = path.basename(filePath).split('.');

const destination = `${dirname}/redimensionado`

if(!fs.existsSync(destination)){
	fs.mkdirSync(destination)
}

sizes.forEach(size => {
	sharp(filePath)
	.clone()
	.toFormat(format)
	.resize({width: size})
	.toFile(`${destination}/${filename}-${size}.${format}`)
	.then(info => console.log(info))
	.catch(error => console.log(error))
});


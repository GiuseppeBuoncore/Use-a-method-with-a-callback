/* Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file */

import { writeFile } from 'node:fs';

writeFile('message.txt', 'Hello Node.js', 'utf8', () => {
    console.log('hello')
}); 
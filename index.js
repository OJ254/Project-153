import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Type website URL:',
        }
    ])
    .then((answers) => {
        const url = answers.url; // Extract the user input (URL)

        // Generate QR code image
        const qr_svg = qr.image(url, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        console.log('QR Code saved as qr_img.png');

        // Save the URL to a text file
        fs.writeFile('URL.txt', url, 'utf8', (err) => {
            if (err) throw err;
            console.log('The URL has been saved to URL.txt');
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });


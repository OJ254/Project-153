QR Code Generator

This is a simple Node.js application that takes a user-provided URL, generates a QR code for it, and saves both the QR code image and the URL in a text file.

Features

Uses the inquirer package to prompt the user for a website URL.

Generates a QR code image using the qr-image package.

Saves the QR code as a .png file.

Stores the user-entered URL in a text file.

Prerequisites

Ensure you have the following installed before running the project:

Node.js (latest LTS recommended)

npm (comes with Node.js)

Installation

Clone this repository or download the files.

Open a terminal and navigate to the project directory.

Run the following command to install dependencies:

npm install inquirer qr-image

Usage

To run the script, use the following command:

node index.js

How It Works

The script prompts the user to enter a website URL.

It generates a QR code image and saves it as qr_img.png.

It writes the user-entered URL to URL.txt.

File Structure

/qr-code-generator
│── index.js       # Main script file
│── package.json   # Project dependencies
│── qr_img.png     # Generated QR code image
│── URL.txt        # Stores the entered URL

Dependencies

This project uses the following npm packages:

inquirer - Used to get user input from the command line.

qr-image - Used to generate the QR code.

License

This project is open-source and available under the MIT License.

Author

Developed by Japheth Oruko.

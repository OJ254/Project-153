
# **QR Code Generator**  

This project is a **QR Code Generator** that takes a user-inputted URL and creates a QR code image, saving it as a `.png` file. Additionally, it saves the entered URL in a text file.  

## **Features**  
✔️ Accepts a website URL from the user  
✔️ Generates a QR code and saves it as `qr_img.png`  
✔️ Stores the entered URL in `URL.txt`  
✔️ Uses `inquirer` for user input  

## **Technologies Used**  
- **Node.js**  
- **Inquirer.js** (for user input)  
- **qr-image** (to generate QR codes)  
- **fs (File System)** (to handle file operations)  

## **Installation & Usage**  

### **1. Clone the repository**  
```bash
git clone <repository_url>
cd <project_folder>
```

### **2. Install dependencies**  
```bash
npm install
```

### **3. Run the script**  
```bash
node index.js
```

### **4. Enter the website URL**  
When prompted, enter the URL for which you want to generate a QR code.  

### **5. Check output files**  
- The generated QR code image will be saved as `qr_img.png`.  
- The URL you entered will be saved in `URL.txt`.  

## **Dependencies**  
To run this project, you need the following dependencies installed:  
```bash
npm install inquirer qr-image fs
```

## **License**  
This project is licensed under the **MIT License**.  

---
Feel free to modify the project to fit your needs! 🚀

# MemeVerse Generator - Dynamic React Meme App  

A **fun, responsive meme generator** built with React and modern CSS.  
Fetches random meme templates via the **Imgflip API**, lets users add custom captions, pick fonts, and **download the final meme** — all in the browser.

![React](https://img.shields.io/badge/React-18.x-blue) ![API](https://img.shields.io/badge/Imgflip-API-orange) ![License](https://img.shields.io/badge/License-MIT-green) ![Status](https://img.shields.io/badge/Status-Live-success)

---

## 🚀 Live Demo
[View Live Site](https://meme-generator-two-mocha.vercel.app/)

---

## ✨ Features

- 🎲 **Random Meme Fetching** – Uses the Imgflip API to pull new memes every click  
- ✍️ **Custom Captions** – Add top and bottom text with instant preview  
- 🧩 **Font Picker** – Choose from multiple fonts loaded from a `font.js` data file  
- ⚡ **Responsive Flex Layout** – Automatically adjusts to each meme’s size  
- 🌈 **Smooth Transitions** – Fades between images for a premium feel  
- 💾 **One-Click Download** – Exports the full meme (text + image) using `html2canvas`  
- 🧱 **Modular Architecture** – Clean React component structure for scalability  

---

## 🛠️ Tech Stack

- **Frontend:** React 18, CSS3, HTML5  
- **API:** Imgflip API (public meme templates)  
- **Utility:** html2canvas (DOM to image capture)  
- **Deployment:** Netlify  

---

## 🎨 Meme Generator Workflow

### How It Works:
1. **Fetch Template** – Pulls a random meme image from Imgflip API  
2. **Add Text** – Type your top and bottom captions  
3. **Pick a Font** – Choose from fonts listed in `data/font.js`  
4. **Generate Meme** – Instantly updates on screen  
5. **Download Image** – Saves your final meme with all overlays  

---

## ⚙️ Download Function

This feature captures the entire `.meme-box` (image + text) using `html2canvas` and downloads it as a PNG:

```javascript
function downloadMeme() {
  const memeBox = document.querySelector('.meme-box');
  if (!memeBox) return;

  html2canvas(memeBox, { useCORS: true, backgroundColor: null }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
✅ Works 100% client-side — no server, no upload, no delay.

📁 Project Structure
css
Copy code
src/
├── components/
│   └── Main.jsx        # Core meme logic + UI
│   └── Main.css        # Styling & layout
├── data/
│   └── font.js         # Font mapping file
└── App.jsx
🚀 Quick Start
Prerequisites
Node.js (v14+)

npm or yarn

Installation
Clone the repository

bash
Copy code
git clone https://github.com/hddgpp/Meme-Generator.git
cd meme-cd
Install dependencies

bash
Copy code
npm install
Run the dev server

bash
Copy code
npm run dev
Open your browser

arduino
Copy code
http://localhost:5173
💾 Example Output
<img width="1800" height="860" alt="Generated Meme Example" src="https://github.com/user-attachments/assets/your-output-example-here" />
🔧 Future Enhancements
 Upload custom images

📄 License
This project is licensed under the MIT License — free to use, modify, and share.

👨‍💻 Developer
Youssef (hddgpp)
Frontend Developer & Creative Builder

GitHub: @hddgpp

Email: youssef.dev.ai@outlook.com

🌟 Project Journey
This project marks a new milestone in my React learning journey — going from basic API fetching to full client-side functionality (text overlays, downloads, font integration).
It represents hands-on problem-solving, UI polish, and real-world app structure — all self-taught.

⭐ Star this repo if you vibe with clean, creative frontend builds!

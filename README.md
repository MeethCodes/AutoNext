# ➡️ Auto Next Browser Extension

## 🚀 Project Overview

**Auto Next** is a browser extension designed to automatically advance to the next episode in a media player's queue on websites that lack a built-in auto-play feature. It provides a seamless, hands-free viewing experience, eliminating the need for manual clicks between episodes.

**Example Scenario:**  
Imagine you're doing the dishes and an episode ends. Instead of having to dry your hands, navigate to your Device, and manually click "next," Auto Next handles it for you, allowing you to stay focused on your task.

---

## ✨ Key Features

- **Hands-Free Viewing:** Automatically clicks the "next episode" button when the current video finishes.
- **Site-Specific Automation:** Built initially for a single media player to ensure robust functionality (e.g., the website from the shared screenshot).
- **Lightweight & Efficient:** Runs in the background without significantly impacting browser performance.

---

## 💡 Technical Approach (High-Level)

This extension works by injecting a content script into the target website's page. The script monitors the state of the video player. When it detects that the video has ended, it programmatically locates the "next episode" button using its unique DOM selector and triggers a simulated click event. This approach ensures the action is triggered precisely when needed, mimicking user behavior.

---

## 🛠️ Installation & Usage

1. **Clone the repository:**  
   `git clone https://github.com/MeethCodes/AutoNext.git`

2. **Open your browser's extension manager:**  
   - Chrome: `chrome://extensions`  
   - Firefox: `about:addons`

3. **Enable Developer Mode:**  
   Toggle the "Developer mode" switch on.

4. **Load the extension:**  
   Click "Load unpacked" and select the cloned project folder.

5. **Navigate to the target site:**  
   The extension will automatically be active on the specified website.

---

## 💻 Technologies Used

- **JavaScript:** Core logic for DOM manipulation and event handling.
- **HTML & CSS:** For the extension's user interface (if any).
- **JSON:** For the `manifest.json` configuration file.

---

## 🛣️ Future Roadmap

- **V2.0 – Scalable Solution:**  
  Implement a more robust and adaptable selector system to work across a wider range of websites.

- **V3.0 – User Customization:**  
  Add a popup UI to allow users to configure selectors for their favorite sites.

---

## 👤 Author

**Meeth Amin**  
[GitHub Profile](https://github.com/MeethCodes) | [LinkedIn Profile](https://www.linkedin.com/in/meeth-amin-4a73711b3/)

# Local business Dashboard Frontend

This is the frontend React app for the Headline Generator, allowing users to enter their business details and receive a personalized headline. Styled using Tailwind CSS.

## 🧰 Tech Stack

- React
- Tailwind CSS
- Axios

## 📁 Folder Structure

frontend/
├── public/
├── src/
│ ├── App.js
│ ├── components/
│ └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js

shell
Copy
Edit

## 🚀 How to Run

### 1. Install Dependencies

```bash
cd frontend
npm install
2. Start the App
bash
Copy
Edit
npm start
Runs on: http://localhost:3000

✨ Features
Input business name, location, and industry

Generates dynamic marketing headlines

Option to regenerate new headline

Display rating and reviews (mocked)

Responsive design using Tailwind CSS

🔗 API Connection
Connects to backend server on: http://localhost:5000

Example POST request:
js
Copy
Edit
axios.post("http://localhost:5000/business-data", {
  name: "Bliss Cafe",
  location: "New York",
  industry: "cafe"
})

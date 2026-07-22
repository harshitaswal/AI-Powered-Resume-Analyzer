# AI Resume Analyzer & Interview Preparation Platform

An AI-powered MERN stack application that analyzes resumes against a target job description and generates a personalized interview preparation plan. The application evaluates resume-job compatibility, identifies skill gaps, and creates technical and behavioral interview questions using Google's Gemini AI.

## 🚀 Features

* 📄 Upload PDF resumes for analysis
* 🤖 AI-powered resume analysis using Gemini AI
* 🎯 Compare resume with a target job description
* 📊 Resume match score (0–100)
* 💼 Personalized interview strategy
* 💻 Technical interview questions with sample answers
* 🗣️ Behavioral interview questions with sample answers
* 📚 Skill gap analysis
* 📅 Personalized preparation roadmap
* 🔐 User authentication with JWT
* 📂 View and manage previous interview reports
* 📱 Responsive and modern user interface

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* SCSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* PDF-Parse
* JWT Authentication

### AI

* Google Gemini API

## 📁 Project Structure

```text
YT-GEN-AI/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Backend/
│   ├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── middlewares/
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/YT-GEN-AI.git
cd YT-GEN-AI
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start the backend:

```bash
npm run dev
```

### Frontend Setup

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

The backend will run on:

```
http://localhost:3000
```

## 📖 How It Works

1. Sign up or log in.
2. Enter the target job description.
3. Upload your resume (PDF) or provide a self-description.
4. The AI analyzes your profile.
5. Receive:

   * Resume Match Score
   * Technical Interview Questions
   * Behavioral Interview Questions
   * Skill Gap Analysis
   * Personalized Preparation Plan
6. Save and revisit your reports anytime.

## 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Resume Upload
* Interview Report
* Dashboard

## 🔮 Future Enhancements

* Voice-based mock interviews
* AI interview chatbot
* ATS resume scoring
* Resume improvement suggestions
* Export reports as PDF
* Multi-language support
* Company-specific interview preparation
* Interview performance tracking

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Harshit Aswal**

* GitHub: https://github.com/harshitaswal
* LinkedIn: Add your LinkedIn profile here

---

⭐ If you found this project useful, consider giving it a star on GitHub!

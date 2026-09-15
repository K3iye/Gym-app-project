# JaryAI: AI Fitness Coach 🏋️

**JaryAI: AI Fitness Coach** is a fitness web application that uses computer vision and AI to analyze exercise form, count repetitions, and provide feedback based on your performance. JaryAI rates your performance from 1-10 with 1 being "needs room for improvement" and 10 being "perfect form."

## Goal 🎯 

JaryAI is designed to help users improve their exercise technique by using their camera to track movement and provide real-time feedback. Ryan and Johnny are two software developers who struggled with dealing with bad form at the gym. Learning from our mistakes through trial and error, we realize there isn't a personalized coach to help you with your form. It was time we decided to create an app that can help any experiences at the gym to get the form right so that you aren't losing potential gains.

## Planned Features ✨

- Live camera workout tracking
- Exercise form analysis/feedback
- Good/bad rep detection
- Workout video replay
- Exercise library
- Workout history
- Real-time graph of overall improvement

### Initial Exercises

We are starting with:

- Barbell Squat
- Bench Press
- Deadlift

More exercises will be added later.

### Frontend 

- Next.js
- React
- TypeScript
- Tailwind CSS
- MediaPipe

### Backend

- Python
- FastAPI
- NumPy
- PyTorch

## Project Structure 📁

    gym-app-project/
    │
    ├── frontend/       # Next.js web application
    ├── backend/        # Python backend and AI
    ├── planning.md     # Project ideas and planning
    └── README.md

## Running the Frontend

Go into the frontend folder:

    cd frontend

Install dependencies:

    npm install

Start the development server:

    npm run dev

Then open:

    http://localhost:3000

## How JaryAI Will Work 🧠 

    Camera
       ↓
    Pose Detection
       ↓
    Body Landmarks
       ↓
    Form Analysis
       ↓
    Rep Detection
       ↓
    Form Score
       ↓
    Feedback + Replay

## Project Status 🚧 

JaryAI is currently under development.

Current focus:

- [x] Create Next.js application
- [x] Get browser camera working
- [ ] Add pose detection
- [ ] Draw pose skeleton
- [ ] Detect squat movement
- [ ] Count repetitions
- [ ] Analyze squat form
- [ ] Add form scoring
- [ ] Add workout replay
- [ ] Add bench press
- [ ] Add deadlift

## 🏁 End Goal
In the future, we will add a leveling system for mobile users where the more perfect reps you do the more you level up.
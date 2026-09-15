# How we split the work
We decided that we will split the work together. The frontend side will be handled by Ryan Nguyen where he deals with Next.js, React, TypeScript, Tailwind CSS, and MediaPipe

On the other hand, Johnny Rosado Ventura will deal with the backend where he deals with Python, FastAPI, NumPy, and PyTorch.

# Frontend (Ryan Nguyen):

FRONTEND SETUP
[x] 1. Create Next.js project
[x] 2. Set up TypeScript
[x] 3. Set up Tailwind CSS
[x] 4. Clean up default Next.js page
[x] 5. Create basic JaryAI layout
[x] 6. Create navigation/header
[x] 7. Create reusable UI components

CAMERA
[x] 8. Get user's camera working
[ ] 9. Add camera start/stop button
[ ] 10. Add camera permission handling
[ ] 11. Mirror camera display correctly
[ ] 12. Add camera loading/error states

POSE DETECTION
[ ] 13. Install MediaPipe
[ ] 14. Load Pose Landmarker
[ ] 15. Connect MediaPipe to camera
[ ] 16. Detect body landmarks
[ ] 17. Draw skeleton over video
[ ] 18. Make skeleton update in real time
[ ] 19. Handle people entering/leaving camera view

WORKOUT UI
[ ] 20. Create exercise selection screen
[ ] 21. Add Squat
[ ] 22. Add Deadlift
[ ] 23. Add Bench Press
[ ] 24. Add more exercises
[ ] 25. Create workout setup screen
[ ] 26. Add exercise instructions
[ ] 27. Add "Start Workout" button

BACKEND CONNECTION
[ ] 28. Connect frontend to backend
[ ] 29. Send landmarks to backend
[ ] 30. Send selected exercise
[ ] 31. Receive rep count
[ ] 32. Receive good/bad rep results
[ ] 33. Receive form feedback
[ ] 34. Receive score
[ ] 35. Handle backend errors/loading

LIVE WORKOUT
[ ] 36. Display live rep counter
[ ] 37. Display good reps
[ ] 38. Display workout score
[ ] 39. Display form feedback
[ ] 40. Highlight form problems
[ ] 41. Add workout timer
[ ] 42. Add pause/resume
[ ] 43. Add "End Workout"

RESULTS
[ ] 44. Create workout summary screen
[ ] 45. Display total reps
[ ] 46. Display good/bad reps
[ ] 47. Display score /10
[ ] 48. Display form mistakes
[ ] 49. Display feedback
[ ] 50. Display workout statistics

REPLAY
[ ] 51. Add workout replay
[ ] 52. Show recorded video
[ ] 53. Show skeleton during replay
[ ] 54. Show bad reps
[ ] 55. Show where form went wrong
[ ] 56. Add replay controls

EXERCISE DICTIONARY
[ ] 57. Create exercise dictionary page
[ ] 58. Add exercise cards
[ ] 59. Add exercise descriptions
[ ] 60. Add muscles worked
[ ] 61. Add proper form instructions
[ ] 62. Add common mistakes
[ ] 63. Add search/filter

POLISH
[ ] 64. Improve responsive design
[ ] 65. Improve mobile layout
[ ] 66. Add animations
[ ] 67. Add loading states
[ ] 68. Add error states
[ ] 69. Improve accessibility
[ ] 70. Final UI polish

DEPLOYMENT
[ ] 71. Prepare frontend for production
[ ] 72. Connect production backend
[ ] 73. Test camera permissions on production
[ ] 74. Test on different devices
[ ] 75. Deploy frontend

# Backend (Johnny Rosado Ventura):

BACKEND SETUP
[x] 1. Create backend/ folder
[ ] 2. Create Python virtual environment
[ ] 3. Activate virtual environment
[ ] 4. Install FastAPI
[ ] 5. Install Uvicorn
[ ] 6. Create requirements.txt
[ ] 7. Create main.py
[ ] 8. Start FastAPI server
[ ] 9. Test backend in browser

BASIC API
[ ] 10. Create GET /
[ ] 11. Create POST /analyze
[ ] 12. Learn how API requests work
[ ] 13. Learn JSON
[ ] 14. Create Pydantic data models
[ ] 15. Test API with fake landmark data
[ ] 16. Return a test response to frontend

CONNECT FRONTEND → BACKEND
[ ] 17. Agree on landmark format with frontend
[ ] 18. Receive MediaPipe landmarks
[ ] 19. Receive exercise name
[ ] 20. Validate incoming data
[ ] 21. Handle missing/invalid landmarks
[ ] 22. Send analysis results back
[ ] 23. Successfully communicate with frontend

MOVEMENT MATH
[ ] 24. Learn body landmark coordinates
[ ] 25. Create angle calculation
[ ] 26. Test knee angle
[ ] 27. Test hip angle
[ ] 28. Test elbow angle
[ ] 29. Create distance calculation
[ ] 30. Create movement/position calculations

SQUAT ANALYZER
[ ] 31. Create SquatAnalyzer
[ ] 32. Detect standing position
[ ] 33. Detect squat descent
[ ] 34. Detect bottom position
[ ] 35. Detect squat ascent
[ ] 36. Detect completed rep
[ ] 37. Count reps

SQUAT FORM
[ ] 38. Check squat depth
[ ] 39. Check knee alignment
[ ] 40. Check hip position
[ ] 41. Check back position
[ ] 42. Detect good rep
[ ] 43. Detect bad rep
[ ] 44. Identify WHY rep was bad

SCORING & FEEDBACK
[ ] 45. Create form score
[ ] 46. Create workout score /10
[ ] 47. Generate feedback
[ ] 48. Return reps
[ ] 49. Return good reps
[ ] 50. Return bad reps
[ ] 51. Return mistakes
[ ] 52. Return recommendations

REAL-TIME ANALYSIS
[ ] 53. Receive landmarks continuously
[ ] 54. Analyze each frame
[ ] 55. Track movement between frames
[ ] 56. Prevent duplicate rep counting
[ ] 57. Improve analysis speed
[ ] 58. Handle person leaving camera
[ ] 59. Handle missing landmarks

MORE EXERCISES
[ ] 60. Create ExerciseAnalyzer system
[ ] 61. Add DeadliftAnalyzer
[ ] 62. Analyze deadlift form
[ ] 63. Add BenchPressAnalyzer
[ ] 64. Analyze bench press form
[ ] 65. Add PushupAnalyzer
[ ] 66. Add more exercises

WORKOUT DATA
[ ] 67. Create workout data structure
[ ] 68. Store reps
[ ] 69. Store good/bad reps
[ ] 70. Store scores
[ ] 71. Store form mistakes
[ ] 72. Store timestamps
[ ] 73. Prepare data for replay

CUSTOM AI
[ ] 74. Collect movement data
[ ] 75. Label good/bad reps
[ ] 76. Create training dataset
[ ] 77. Learn PyTorch
[ ] 78. Train first model
[ ] 79. Test model
[ ] 80. Compare AI vs rule-based system
[ ] 81. Improve model
[ ] 82. Integrate custom AI

PRODUCTION & DEPLOYMENT
[ ] 83. Clean up backend
[ ] 84. Add error handling
[ ] 85. Add security
[ ] 86. Add environment variables
[ ] 87. Optimize performance
[ ] 88. Deploy backend
[ ] 89. Connect production frontend
[ ] 90. Test entire application
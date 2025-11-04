# 🪨✂️ Rock Paper Scissors Game — React Version

A fun, animated **Rock Paper Scissors** game built using **React**, featuring dynamic round-based gameplay, score tracking, and visual effects.

---

## 🚀 Features

✅ **React Hooks Used:**

* `useState` – for managing game state (choices, score, rounds)
* `useEffect` – for handling round flow and session logic

✅ **Gameplay:**

* Play 5 rounds per session
* See real-time round results
* Animated background flashes (Win = Green, Lose = Red, Draw = Yellow)
* Bounce animation on button clicks
* Final session result displayed automatically

✅ **Reset Option:**

* Restart the session anytime with one click

---

## 🤩 Folder Structure

```
rps-game/
 ┣ 🗂️ src/
 ┃ ┣ 🗋 App.jsx
 ┃ ┣ 🗋 App.css
 ┃ ┗ 🗋 main.jsx
 ┣ 🗋 package.json
 ┗ 🗋 README.md
```

---

## ⚙️ Setup & Run

```bash
# 1️⃣ Create project
npm create vite@latest rps-game -- --template react

# 2️⃣ Go to folder
cd rps-game

# 3️⃣ Install dependencies
npm install

# 4️⃣ Replace src/App.jsx and src/App.css with provided files

# 5️⃣ Run the project
npm run dev
```

Your app will run at 🔗 **[http://localhost:5173](http://localhost:5173)**

---

## 🎨 App Preview

```
Rock Paper Scissors  
Round: 5 / 5  
🧟 You: 3 | 🤖 Computer: 2  

🎉 You Win this round!  
[Rock] [Paper] [Scissors]
```

✨ Final session result shown automatically after 5 rounds.

---

## 💡 Future Enhancements

* 🔊 Add sound effects for win/lose/draw
* 🤠 Add “Smart Computer” mode using probability
* 👥 Add multiplayer option
* 🎮 Store previous session scores in localStorage

---

## 🧠 Tech Stack

* React (Vite)
* CSS Animations
* useState, useEffect hooks

---

## 💚 License

This project is open-source — feel free to use or modify it for learning or your own portfolio.


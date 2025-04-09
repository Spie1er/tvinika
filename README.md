![](/public/logosm.png)


# Tvinika - Georgian Wordle Clone 🧑‍💻📝

Welcome to **Wordy**, a Wordle-style game for the Georgian language! 🎉  
This is a fun, yet challenging puzzle game where players have to guess a randomly selected 5-letter Georgian word in **6 attempts**. The game provides real-time feedback on letter accuracy and position — with a twist of fun! 🎮

---

## 🏗️ Project Setup

### Prerequisites

To get started, you'll need to have **Node.js** (v18 or higher) and **npm** installed. You can download them from [nodejs.org](https://nodejs.org).

### 1. Clone the repository
```bash
git clone https://github.com/Spie1er/tvinika.git
cd wordy
```

### 1. Install Dependences
```bash
npm install
```

### This will install all the necessary dependencies for the project, including:
- Next.js v15.2.4 (Framework)
- React v19.0.0 (Library)
- TailwindCSS v4 (Styling)
- Lucide React (Icons)


### 3. Running the project in development mode
```bash
npm run dev
```

---

## ⚙️ Available Scripts
**dev**: Starts the Next.js development server with Turbopack for blazing-fast hot-reloading.
```bash
npm run dev
```

**build**: Builds the production version of the app.
```bash
npm run build
```

**start**: Starts the production server.
```bash
npm run start
```

**lint**: Runs ESLint to check for issues in the codebase..
```bash
npm run lint
```

---

## 🔧 Tech Stack

- Next.js v15.2.4: A hybrid framework that allows server-side rendering and static site generation for React apps.
- React v19: The most flexible JavaScript library for building user interfaces.
- TailwindCSS v4: A utility-first CSS framework that makes styling super easy and flexible.
- Lucide React: A collection of SVG icons for React, to make your app visually appealing.


---

## 📖 Features

- Georgian Words: Play with 2000+ Georgian 5-letter words, ensuring every game is unique and challenging.
- Guess Feedback: Like Wordle, feedback is provided for each letter guessed:
    - Green: Correct letter and position.
    - Yellow: Correct letter, wrong position.
    - Gray: Incorrect letter.
- On-Screen Keyboard: Interact with an intuitive, clickable keyboard.
- Themes: Supports dark and light modes, perfect for any time of the day.

---

## 🔧 Development
### 1. Custom Word List
You can update the word list by modifying the data/words.json file. Each word should be a 5-letter Georgian word.

### 2. Game Logic
The game logic resides in the game.ts file located in the utils folder. It includes:
- Word selection.
- Checking guessed words.
- Validating game rules.

### 3. CSS Customization
   Tailwind CSS is used for styling. If you want to modify the look and feel, you can change the Tailwind config file (tailwind.config.js) and the custom styles in globals.css.

---

### 💻 Code Quality
This project is linted and formatted using ESLint and Prettier. Feel free to run the following commands to ensure consistency in code style:
- ESLint: ```npm run lint``` – Checks for coding errors or anti-patterns.
- Prettier: The project is formatted using Prettier to keep the codebase clean.


---

### 🛠️ Tools
- ESLint: For linting JavaScript and TypeScript code to prevent bugs.
- Prettier: For automatic code formatting according to our style guidelines.
- TailwindCSS: For utility-first CSS styling.
- Lucide Icons: For sleek, customizable icons across the application.


---

### 🎮 How to Play
1. The game presents you with an empty grid where you have to guess a 5-letter word.
2. You have 6 attempts to guess the word.
3. After each guess, the game will give feedback:
   - Green indicates the correct letter in the correct position.
   - Yellow indicates the correct letter in the wrong position.
   - Gray indicates the letter is not in the word.
4. After 6 attempts or a correct guess, the game ends.
5. Try to guess the word with as few attempts as possible!

---

### 📝 Roadmap
- User Authentication: Allow users to register and keep track of their scores.
- Leaderboard: Add a global leaderboard for players to compete.
- Multilingual Support: Expand the game with multiple language support.
- Sound Effects: Add sound effects for better user engagement.
- Daily Word Challenges: Have a new challenge every day.


---

### 🤝 Contributing
Contributions are welcome! If you find a bug or want to add a new feature,
feel free to fork this project and submit a pull request.


---

### 🌐 Links
- [Live Demo](https://tvinika.ge) - Play Tvinika live!
- [Vercel Deployment](https://tvinika.vercel.app) - Deployed using Vercel.


---

### 🔑 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

## Enjoy the game and happy guessing! 🎉
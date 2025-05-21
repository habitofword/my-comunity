import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [gameState, setGameState] = useState('menu'); // menu, playing, paused, gameover
  const [words, setWords] = useState([]);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const canvasRef = useRef(null);

  // Sample words for the game
  const wordList = [
    "habit", "focus", "routine", "mindful", "discipline",
    "practice", "growth", "success", "consistency", "motivation",
    "challenge", "progress", "journey", "commitment", "balance"
  ];

  // Start the game
  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setWords(generateFallingWords());
    setGameState('playing');
    setInputValue('');
  };

  // Generate falling words
  const generateFallingWords = () => {
    return Array.from({ length: 5 }, (_, i) => ({
      text: wordList[Math.floor(Math.random() * wordList.length)],
      x: Math.random() * window.innerWidth * 0.8,
      y: -Math.random() * 100,
      speed: 1 + Math.random() * 2,
      matched: false
    }));
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());

    // Check if current input matches any visible word
    const newWords = [...words];
    let matched = false;

    for (let i = 0; i < newWords.length; i++) {
      if (
        !newWords[i].matched &&
        e.target.value.toLowerCase() === newWords[i].text.toLowerCase()
      ) {
        newWords[i].matched = true;
        setScore(prev => prev + 10);
        matched = true;
        break;
      }
    }

    setWords(newWords);

    // If a match was found, replace with a new word after a short delay
    if (matched) {
      setTimeout(() => {
        const updatedWords = [...words];
        const matchedIndex = updatedWords.findIndex(w => w.matched);
        if (matchedIndex !== -1) {
          updatedWords[matchedIndex] = {
            text: wordList[Math.floor(Math.random() * wordList.length)],
            x: Math.random() * window.innerWidth * 0.8,
            y: -Math.random() * 100,
            speed: 1 + Math.random() * 2,
            matched: false
          };
          setWords(updatedWords);
        }
      }, 300);
    }
  };

  // Draw animation on canvas
  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Game loop
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw words
      words.forEach(word => {
        ctx.font = "24px Arial";
        ctx.fillStyle = isDarkMode ? "#ffffff" : "#333333";
        
        if (!word.matched) {
          word.y += word.speed;
          ctx.fillText(word.text, word.x, word.y);
          
          // Check if word reached bottom
          if (word.y > canvas.height) {
            setGameState('gameover');
          }
        }
      });

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    const interval = setInterval(() => {
      if (gameState === 'playing') {
        setTimeLeft(prev => prev - 1);
      }
    }, 1000);

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [gameState, words, isDarkMode]);

  // Update time
  useEffect(() => {
    if (timeLeft <= 0 && gameState === 'playing') {
      setGameState('gameover');
    }
  }, [timeLeft, gameState]);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'} transition-colors duration-300`}>
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Habit of Words</h1>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-700'} shadow-md`}
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        {/* Score and timer */}
        {gameState === 'playing' && (
          <div className="w-full max-w-md mb-4 flex justify-between items-center">
            <div className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-semibold`}>Score: {score}</div>
            <div className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} font-semibold`}>Time: {timeLeft}s</div>
          </div>
        )}

        {/* Canvas for game */}
        {gameState !== 'menu' && (
          <canvas
            ref={canvasRef}
            className="mb-4 border-2 rounded-lg shadow-lg w-full max-w-2xl h-96"
          ></canvas>
        )}

        {/* Input field */}
        {gameState === 'playing' && (
          <div className="w-full max-w-md mb-6">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type matching words..."
              className={`w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 focus:ring-blue-500' 
                  : 'bg-white border-gray-300 focus:ring-blue-400'
              } border`}
              autoFocus
            />
          </div>
        )}

        {/* Menu screen */}
        {gameState === 'menu' && (
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Welcome to Habit of Words!</h2>
            <p className="max-w-md mx-auto">
              Match falling words by typing them quickly! Build your vocabulary habit through fun gameplay.
            </p>
            <button
              onClick={startGame}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 transition duration-200"
            >
              Start Playing
            </button>
          </div>
        )}

        {/* Game over screen */}
        {gameState === 'gameover' && (
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Game Over!</h2>
            <p className="text-xl">Your score: {score}</p>
            <button
              onClick={startGame}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 transition duration-200"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Pause screen */}
        {gameState === 'paused' && (
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Game Paused</h2>
            <button
              onClick={() => setGameState('playing')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 transition duration-200"
            >
              Resume
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`py-4 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>© 2025 Habit of Words | A fun way to build language habits</p>
      </footer>
    </div>
  );
}

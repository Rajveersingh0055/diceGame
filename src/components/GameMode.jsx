import { useState } from "react";
import dice1 from "../assets/dice/dice_1.png";
import dice2 from "../assets/dice/dice_2.png";
import dice3 from "../assets/dice/dice_3.png";
import dice4 from "../assets/dice/dice_4.png";
import dice5 from "../assets/dice/dice_5.png";
import dice6 from "../assets/dice/dice_6.png";
import Button from "./useablecomponent/Button";

function GameMode() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [currentImage, setCurrentImage] = useState(dice1);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [error, setError] = useState("");

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setError("");
  };

  const handleDiceClick = () => {
    if (selectedNumber === null) {
      setError("You have not selected any number.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * 6);
    const rolledNumber = randomIndex + 1;

    setCurrentImage(diceImages[randomIndex]);

    if (selectedNumber === rolledNumber) {
      setScore((prev) => prev + rolledNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  const resetGame = () => {
    setScore(0);
    setSelectedNumber(null);
    setCurrentImage(dice1);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-20 py-10">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Score */}
        <div className="text-center">
          <h1 className="text-8xl font-bold leading-none">{score}</h1>
          <p className="text-2xl font-semibold mt-2">Total Score</p>
        </div>

        {/* Number Selection */}
        <div className="flex flex-col items-end">
          {error && (
            <p className="text-red-600 font-semibold mb-3">{error}</p>
          )}

          <div className="flex gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberSelect(num)}
                className={`w-14 h-14 text-xl font-bold border-2 border-black transition duration-200
                ${
                  selectedNumber === num
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <p className="text-xl font-semibold mt-3">Select Number</p>
        </div>
      </div>

      {/* Dice Section */}
      <div className="flex flex-col items-center mt-20">
        <img
          src={currentImage}
          alt="Dice"
          onClick={handleDiceClick}
          className="w-40 cursor-pointer transition duration-200 hover:scale-110 active:scale-95"
        />

        <p className="mt-4 text-xl font-semibold">
          Click on Dice to Roll
        </p>

        <button
          onClick={resetGame}
          className="mt-6 w-56 py-3 border-2 border-black rounded-md font-semibold hover:bg-black hover:text-white transition"
        >
          Reset Score
        </button>

        <div className="mt-4">
          <Button onClick={() => setShowRules(!showRules)}>
            {showRules ? "Hide Rules" : "Show Rules"}
          </Button>
        </div>
      </div>

      {/* Rules */}
      {showRules && (
        <div className="flex justify-center mt-10">
          <div className="w-[700px] rounded-lg bg-red-100 p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              How to Play
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Select any number from 1 to 6.</li>
              <li>Click on the dice image to roll it.</li>
              <li>
                If your selected number matches the dice, you earn points equal
                to the dice value.
              </li>
              <li>If your guess is incorrect, 2 points will be deducted.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameMode;
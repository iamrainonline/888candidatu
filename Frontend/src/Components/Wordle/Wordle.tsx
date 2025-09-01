import { useState, useEffect } from "react";
import "../../App.css";

type Word = string;

const Wordle = () => {
  const [currentWord, setCurrentWord] = useState<Word>("");
  const [clickedLetter, setClickedLetter] = useState<number[]>([]);
  let lives: number = 5;

  useEffect(() => {
    const randomWords: Word[] = ["train", "phone", "mouse", "plane"];
    const randomWord = Math.floor(Math.random() * randomWords.length);

    setCurrentWord(randomWords[randomWord]);
  }, []);
  const Alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const checkLetter = (letter: string, key: number): void => {
    setClickedLetter([...clickedLetter, key]);

    if (!currentWord.includes(letter)) {
      lives--;
    }
  };
  console.log(clickedLetter);
  return (
    <div>
      <h1>Play Worlde !</h1>
      <div className="alphabet">
        {Alphabet.map((letter: string, key: number) => (
          <div className="letter" key={key}>
            <span
              style={{
                backgroundColor: clickedLetter.includes(key)
                  ? "black"
                  : "green",
              }}
              onClick={() => checkLetter(letter, key)}
            >
              {letter.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
      <h1>Guess the word:</h1>
      <h2>live: {lives}</h2>
    </div>
  );
};

export default Wordle;

import React, { useState } from 'react';
import './Hangman.css';
import Keyboard from './Keyboard';

import image7 from "./images/7.png";
import image6 from "./images/6.png";
import image5 from "./images/5.png";
import image4 from "./images/4.png";
import image3 from "./images/3.png";
import image2 from "./images/2.png";
import image1 from "./images/1.png";


const Hangman = () => {
    const maxWrong = 6;
    const images = [image7, image6, image5, image4, image3, image2, image1];

    const [mistake, setMistake] = useState(0);
    const [guessed, setGuessed] = useState(new Set([]));
    const [answer, setAnswer] = useState('react');

    const handleGuess = (e) => {
        let letter = e.target.value;
        setGuessed((prevGuessed) => new Set([...prevGuessed, letter]));
        setMistake((prevMistake) => prevMistake + (answer.includes(letter) ? 0 : 1));
    };

    const guessedWord = () => {
        return answer.split("").map((letter) => (guessed.has(letter) ? letter : " _ "));
    };

    const handleReset = () => {
        setMistake(0);
        setGuessed(new Set([]));
        setAnswer('react');
    };

    const gameOver = mistake >= maxWrong;
    const isWinner = guessedWord().join("") === answer;

    let gameStart = <Keyboard guessed={guessed} handleGuess={handleGuess} />;
    if (isWinner) gameStart = "You Won!!!";
    if (gameOver) gameStart = "You Lost!!!";

    return (
        <>
            <div className='hangman'>
                <div className='hangman-left'>
                    <img src={images[mistake]} alt="" />
                </div>

                <div className='hangman-right'>

                    <p className='hangman-right-head'>Hangman</p>

                    <p className='hangman-dash'>{!gameOver ? guessedWord() : answer}</p>
                    <p className='hangman-message'>Wrong Guesses: {mistake} of {maxWrong}</p>

                    <p className='hangman-result'>{gameStart}</p>

                    <button className='rest-button' onClick={handleReset}>Reset</button>

                </div>
            </div>
        </>
    );
};

export default Hangman;



import React from 'react';

const Keyboard = ({ guessed, handleGuess }) => {
    const alphabet = "abcdefghjklmnopqrstuvwxyz";

    return (
        <>
            {alphabet.split("").map((letter) => (
                <button
                    className={`alphabets ${guessed.has(letter) ? "disabled-button" : ""}`}
                    key={letter}
                    value={letter}
                    onClick={handleGuess}
                    disabled={guessed.has(letter)}
                >
                    {letter}
                </button>
            ))}
        </>
    );
};

export default Keyboard;

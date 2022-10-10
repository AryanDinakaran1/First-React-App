//Imports
import React, { useState } from "react";

// New Game Module
function Game() {
    var array = ['+','-','x','÷']

    const [fnum, setFnum] = useState(parseInt(Math.random() * 100));
    const [lnum, setLnum] = useState(parseInt(Math.random() * 100));
    const [operation, setOperation] = useState(array[parseInt(Math.random() * 4)]);
    const [inpVal, setInpVal] = useState(0);
    const [score, setScore] = useState(0);

    const checkAns = () => {

        if (operation === '+') {
            if (parseInt(inpVal) === fnum+lnum) {
                setScore(score+1);
            }
            else {
                if (score === 0) {
                    setScore(0);
                }
                else {
                    setScore(score-1)
                }
            }
        }
        else if (operation === '-') {
            if (parseInt(inpVal) === fnum-lnum) {
                setScore(score+1);
            }
            else {
                if (score === 0) {
                    setScore(0);
                }
                else {
                    setScore(score-1)
                }
            }
        }
        else if (operation === 'x') {
            if (parseInt(inpVal) === fnum*lnum) {
                setScore(score+1);
            }
            else {
                if (score === 0) {
                    setScore(0);
                }
                else {
                    setScore(score-1)
                }
            }
        }
        else if (operation === '÷') {
            if (parseInt(inpVal) === fnum/lnum) {
                setScore(score+1);
            }
            else {
                if (score === 0) {
                    setScore(0);
                }
                else {
                    setScore(score-1)
                }
            }
        }
        
        setFnum(parseInt(Math.random() * 100));
        setLnum(parseInt(Math.random() * 100));
        setOperation(array[parseInt(Math.random() * 4)]);

    }

    return(
        <div>
            <h1>{fnum} {operation} {lnum}</h1>
            <input type="number" value={inpVal} onChange={(e) => setInpVal(e.target.value)} />
            <button onClick={() => checkAns()}>Check</button>

            <h2>Score: {score}</h2>
        </div>
    );
}

export default Game;
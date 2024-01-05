import './Board.css';
import React from 'react';
import { useState, useEffect } from 'react';


export default function Board() {
    const [turn, setTurn] = useState(0)
    const [spot1, setSpot1] = useState('')
    const [spot2, setSpot2] = useState('')
    const [spot3, setSpot3] = useState('')
    const [spot4, setSpot4] = useState('')
    const [spot5, setSpot5] = useState('')
    const [spot6, setSpot6] = useState('')
    const [spot7, setSpot7] = useState('')
    const [spot8, setSpot8] = useState('')
    const [spot9, setSpot9] = useState('')
    const [win, setWin] = useState(false)
    const history = window.history

    // const handleSetSpot = (e, spot) => {
    //     if (spot == 1) {
    //         setSpot1(e.target.textContent)
    //     } else if (spot == 2) {
    //         setSpot2(e.target.textContent)
    //     }else if (spot == 3) {
    //         setSpot3(e.target.textContent)
    //     }else if (spot == 4) {
    //         setSpot4(e.target.textContent)
    //     }else if (spot == 5) {
    //         setSpot5(e.target.textContent)
    //     }else if (spot == 6) {
    //         setSpot6(e.target.textContent)
    //     } else if (spot == 7) {
    //         setSpot7(e.target.textContent)
    //     }else if (spot == 8) {
    //         setSpot8(e.target.textContent)
    //     } else if (spot == 9) {
    //         setSpot9(e.target.textContent)
    //     }
    // }

    const handleWin = () => {
        if ((spot1.length && spot2.length && spot3.length) && (spot1 === spot2 && spot2 === spot3)) {
            setWin(true)
            console.log("win1")
        } else if ((spot4.length && spot5.length && spot6.length) && (spot4 == spot5 && spot5 == spot6)) {
            setWin(true)
            console.log("win2")
        } else if ((spot7.length && spot8.length && spot9.length) && (spot7 == spot8 && spot8 == spot9)) {
            setWin(true)
            console.log("win3")
        } else if ((spot1.length && spot4.length && spot7.length) && (spot1 == spot4 && spot4 == spot7)) {
            setWin(true)
            console.log("win4")
        } else if ((spot2.length && spot5.length && spot8.length) && (spot2 == spot5 && spot5 == spot8)) {
            setWin(true)
            console.log("win5")
        } else if ((spot3.length && spot6.length && spot9.length) && (spot3 == spot6 && spot6 == spot9)) {
            setWin(true)
            console.log("win6")
        } else if ((spot1.length && spot5.length && spot9.length) && (spot1 == spot5 && spot5 == spot9)) {
            setWin(true)
            console.log("win7")
        } else if ((spot3.length && spot5.length && spot7.length) && (spot3 == spot5 && spot5 == spot7)) {
            setWin(true)
            console.log("win8")
        } else {
            console.log("no win")
        }
    }

    useEffect(() => {
        handleWin();
    }, [spot1, spot2, spot3, spot4, spot5, spot6, spot7, spot8, spot9]);



    const handleClick = (e) => {
        if (!e.target.textContent) {
            if (turn % 2 == 0) {
                e.target.textContent = 'X';
            } else {
                e.target.textContent = 'O';
            }
            let nextTurn = turn + 1;
            setTurn(nextTurn);
        }
        handleWin()
    }

    return (
        <>
            <div id='container'>
                <div id='background'>
                    <div>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 1")
                            setSpot1(e.target.textContent)
                            console.log(spot1)
                        }}
                            disabled={win}
                        ></button>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 2")
                            setSpot2(e.target.textContent)
                            console.log(spot2)
                        }}
                            disabled={win}
                        ></button>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 3")
                            setSpot3(e.target.textContent)
                            console.log(spot3)
                        }}
                            disabled={win}
                        ></button>
                    </div>
                    <div>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 4")
                            setSpot4(e.target.textContent)
                            console.log(spot4)
                        }}
                            disabled={win}
                        ></button>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 5")
                            setSpot5(e.target.textContent)
                            console.log(spot5)
                        }}
                            disabled={win}
                        ></button>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 6")
                            setSpot6(e.target.textContent)
                            console.log(spot6)
                        }}
                            disabled={win}
                        ></button>
                    </div>
                    <div>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 7")
                            setSpot7(e.target.textContent)
                            console.log(spot7)
                        }}
                            disabled={win}
                        ></button>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 8")
                            setSpot8(e.target.textContent)
                            console.log(spot8)
                        }}
                            disabled={win}
                        ></button>
                        <button onClick={(e) => {
                            handleClick(e)
                            console.log("clicked 9")
                            setSpot9(e.target.textContent)
                            console.log(spot9)
                        }}
                            disabled={win}
                        ></button>
                    </div>
                </div>
                {win && turn % 2 == 0 &&
                    <div>
                        <h1>Player 2 Wins!</h1>
                        <button id='restart' onClick={() => {
                            history.go(0)
                        }}>Restart</button>
                    </div>
                }
                {win && turn % 2 != 0 &&
                    <div>
                        <h1>Player 1 Wins!</h1>
                        <button id='restart' onClick={() => {
                            history.go(0)
                        }}>Restart</button>
                    </div>
                }
                {!win && turn == 9 &&
                    <div>
                        <h1>Draw!</h1>
                        <button id='restart' onClick={() => {
                            history.go(0)
                        }}>Restart</button>
                    </div>}
            </div>
        </>
    )
}
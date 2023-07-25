import React, { useState, useEffect } from "react";

// import api
import { insertScoreApi } from "../../api/rpsApi"

//import css
import '../../Styles/GamePages/rps.css'

function RockPaperScissorsPage() {
    const username = localStorage.getItem("tokenUsername");
    const choices = ["rock", "paper", "scissors"];
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('VS');
    const [skor, setSkor] = useState(0);
    const [insertMessage, setInsertMessage] = useState("");

    const handleButtonDone = async () => {
        try {
            const user_id = localStorage.getItem("tokenId");
            await insertScoreApi(user_id, skor);
            setInsertMessage(`Skor tersimpan di user ${username} dengan skor ${skor} `);
            setSkor(0);
            setTimeout(() => {
                setUserChoice(null);
                setComputerChoice(null);
                setResult('VS');
                setInsertMessage("");
            }, 2000);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleButtonClick = (chosenChoice) => {
        if (result === "VS") {
            // Generate computer's choice
            const randomIndex = Math.floor(Math.random() * choices.length);
            const randomChoice = choices[randomIndex];

            // Set user and computer choices
            setUserChoice(chosenChoice);
            setComputerChoice(randomChoice);
        } else {
            setResult("Click Refresh !");
        }
    };

    const handleRestart = () => {
        // Reset the choices and result
        setUserChoice(null);
        setComputerChoice(null);
        setResult('VS');
    };

    useEffect(() => {
        if (userChoice && computerChoice) {
            // Evaluate the result
            if (userChoice === computerChoice) {
                setResult("It's a draw!");
            } else if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
                setResult("You win!");
                setSkor(skor + 1);
            } else {
                setResult("Com wins!");
            }
        }
    }, [userChoice, computerChoice]);

    
    useEffect(() => {
        try{
            if (!localStorage.getItem('tokenId')) {
                window.location.replace('/login')
            }
        } catch(error) {
            console.error('Error occurred while verifying token:', error);
        }
    }, [])

    return (
        <div class="rps-body">
            <header class="rps-header">
                <div className="rps-leftitem">
                    <a href="/" type="button" className="backButton" >
                        <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.0039 37.8633L0.09375 22.4648V17.4375L35.0039 0V8.4375L10.957 19.582L35.0039 29.4609V37.8633Z" fill="#724C21" />
                        </svg>
                    </a>
                    <img src="/images/game/rps.png" alt="" className="logo" />
                    <h1 className="rps-judul">ROCK PAPER SCISSORS</h1>
                </div>
                <div className="rps-rightitem">
                    <button onClick={() => handleButtonDone()} id="done-button">
                        <h3>Save your Progress!</h3>
                    </button>
                </div>

            </header>
            <div className="rps-scoredisplay">
                Score : {skor}
            </div>
            <br />
            <div className="grid">
                <div className="row" id="row-1">
                    <div className="col" id="col-11">
                        <h2 className="rps-name" >{username}</h2>
                    </div>
                    <div className="col rps-result-message" id="col-12">
                        {insertMessage}
                    </div>
                    <div className="col" id="col-13">
                        <h2 className="rps-name">COM</h2>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col" id="col-21">
                        <button onClick={() => handleButtonClick("rock")} id="rps-button" className={userChoice === "rock" ? "chosen" : "rps-button"}>
                            <img src="/images/game/batu.png" alt="" id="batu" />
                        </button>
                    </div>
                    <div className="col" id="col-22"></div>
                    <div className="col" id="col-23">
                        <div className={computerChoice === "rock" ? "chosen" : ""} id="computerChoice">
                            <img src="/images/game/batu.png" alt="" id="batu-com" />
                        </div>
                    </div>
                </div>
                <div className="row" id="row-3">
                    <div className="col" id="col-31">
                        <button onClick={() => handleButtonClick("paper")} id="rps-button" className={userChoice === "paper" ? "chosen" : "rps-button"}>
                            <img src="/images/game/kertas.png" alt="" id="kertas" />
                        </button>
                    </div>
                    <div className="col" id="result">
                        <span>{result}</span>
                    </div>
                    <div className="col" id="col-33">
                        <div className={computerChoice === "paper" ? "chosen" : ""} id="computerChoice">
                            <img src="/images/game/kertas.png" alt="" id="kertas-com" />
                        </div>
                    </div>
                </div>
                <div className="row" id="row-4">
                    <div className="col" id="col-41">
                        <button onClick={() => handleButtonClick("scissors")} id="rps-button" className={userChoice === "scissors" ? "chosen" : "rps-button"}>
                            <img src="/images/game/gunting.png" alt="" id="gunting" />
                        </button>
                    </div>
                    <div className="col" id="col-42"></div>
                    <div className="col" id="col-43">
                        <div className={computerChoice === "scissors" ? "chosen" : ""} id="computerChoice">
                            <img src="/images/game/gunting.png" alt="" id="gunting-com" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="rps-refresh-button">
                <button onClick={handleRestart} id="refresh-button">
                    <img src="/images/game/refresh.png" alt="" className="refresh-img" />
                </button>
            </div>

        </div>
    )
}

export default RockPaperScissorsPage;


import "./App.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useEffect, useState } from "react";

const actions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],

};



function ActionIcon({ action, ...props }) {
    const icons = {
        rock: FaHandRock,
        paper: FaHandPaper,
        scissors: FaHandScissors,

    };
    const Icon = icons[action];
    return <Icon {...props} />;
}

function Player1({ name = "Player", score = 0, action = "rock" }) {
    return (
        <div className="player">
            <div className="score">{`${name}: ${score}`}</div>
            <div className="action">
                {action && <ActionIcon action={action} size={60} />}
            </div>
        </div>
    );
}
function Player2({ name = "Player", score = 0, action = "rock" }) {
    return (
        <div className="player">
            <div className="score">{`${name}: ${score}`}</div>
            <div className="action">
                {action && <ActionIcon action={action} size={60} />}
            </div>
        </div>
    );
}

function ActionButton({ action = "rock", onActionSelected }) {
    return (
        <button className="round-btn" onClick={() => onActionSelected(action)}>
            <ActionIcon action={action} size={20} />
        </button>
    );
}



function OyuncuOyuncu() {
    const [player1Action, setPlayer1Action] = useState("");
    const [player2Action, setPlayer2Action] = useState("");

    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [winner, setWinner] = useState(0);

    const onActionSelected = (selectedAction1) => {
        setPlayer1Action(selectedAction1);
    };

    const onActionSelected2 = (selectedAction2) => {
        setPlayer2Action(selectedAction2);
    };

    const Result = () => {
        if (player1Action === "rock" && player2Action === "scissors") {
            setWinner("1. Oyuncu Kazandı");
            setPlayer1Score(player1Score + 1);

        } else if (player1Action === "rock" && player2Action === "paper") {
            setWinner("2. Oyuncu Kazandı");
            setPlayer2Score(player2Score + 1);


        } else if (player1Action === "scissors" && player2Action === "paper") {
            setWinner("1. Oyuncu Kazandı");
            setPlayer1Score(player1Score + 1);

        } else if (player1Action === "scissors" && player2Action === "rock") {
            setWinner("2. Oyuncu Kazandı");
            setPlayer2Score(player2Score + 1);

        } else if (player1Action === "paper" && player2Action === "rock") {
            setWinner("1. Oyuncu Kazandı");
            setPlayer1Score(player1Score + 1);

        } else if (player1Action === "paper" && player2Action === "scissors") {
            setWinner("2. Oyuncu Kazandı");
            setPlayer2Score(player2Score + 1);

        } else {
            setWinner("Berabere");

        }
    };

    useEffect(()=>{
        Result();
    },[player2Action])

    return (
        <div className="center">
            <h1>Oyuncu VS Oyuncu</h1>
            <div>
                <div className="container">
                    <Player1
                        name="1.Oyuncu"
                        score={player1Score}
                        action={player1Action}
                    />
                    <Player2
                        name="2.Oyuncu"
                        score={player2Score}
                        action={player2Action}
                    />
                </div>
                <div>
                    <h2>1. Oyuncu</h2>
                    <ActionButton action="rock" onActionSelected={onActionSelected} />
                    <ActionButton action="paper" onActionSelected={onActionSelected} />
                    <ActionButton action="scissors" onActionSelected={onActionSelected} />
                </div>
                <div>
                    <h2>2.Oyuncu</h2>
                    <ActionButton action="rock" onActionSelected={onActionSelected2} />
                    <ActionButton action="paper" onActionSelected={onActionSelected2} />
                    <ActionButton
                        action="scissors"
                        onActionSelected={onActionSelected2}
                    />
                </div>

                <div>
                    <h2 >SONUÇ=>{winner}</h2>
                </div>

            </div>
        </div>
    );
}

export default OyuncuOyuncu;

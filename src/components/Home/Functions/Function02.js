import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class PaperGame extends Component {

    state = {
        click: false
    };

    handleButtonOneClick = () => {
        this.setState({
            click: this.state.click ? false : true
        })
    };

    render() {

        const {click} = this.state;

        let styleOne = {
            width: click ? '30%' : '10%',
            height: click ? '45%' : '10%',
            fontSize: click ? '15px' : '0%',
            transition: '2s',
        };

        let styleTwo = {
            fontSize: click ? '0%' : '70px',
            transition: '5s',
        };


        let paperRockScissors = function (player1, player2) {

            const allowedValues = ["paper", "rock", "scissors"];
            if (
                allowedValues.indexOf(player1.toLowerCase()) === -1 ||
                allowedValues.indexOf(player2.toLowerCase()) === -1
            ) {
                return "Błędne informacje";
            }
            ;

            if (
                (player1.toLowerCase() === "paper" && player2.toLowerCase() === "rock") ||
                (player1.toLowerCase() === "rock" && player2.toLowerCase() === "scissors") ||
                (player1.toLowerCase() === "scissors" && player2.toLowerCase() === "paper")
            ) {
                return "Gracz 1 wygrał";
            } else if (player1.toLowerCase() === player2.toLowerCase()) {
                return "Remis";
            } else {
                return "Gracz 2 wygrał"
            }
        };

        console.log(paperRockScissors("scissors", "rock"));
        console.log(paperRockScissors("scissors", "paper"));
        console.log(paperRockScissors("scissors", "scissors"));
        console.log(paperRockScissors("halabarda", "kandelabr"));
    }
}

export default PaperGame;
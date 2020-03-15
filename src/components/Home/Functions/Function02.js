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
            width: click ? '100%' : '10%',
            height: click ? '100%' : '10%',
            fontSize: click ? '30px' : '0%',
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
                return "Remis  ";
            }
            ;

            if (
                (player1.toLowerCase() === "paper" && player2.toLowerCase() === "rock") ||
                (player1.toLowerCase() === "rock" && player2.toLowerCase() === "scissors") ||
                (player1.toLowerCase() === "scissors" && player2.toLowerCase() === "paper")
            ) {
                return "Gracz 1  ";
            } else if (player1.toLowerCase() === player2.toLowerCase()) {
                return "Remis";
            } else {
                return "Gracz 2  "
            }
        };

        return (
            <section className='paperGame' style={styleOne}
                     onClick={this.handleButtonOneClick}>
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>2.</div>
                <div className='paperGameAll'>
                    Papier, kamień, nożyce.. Gracz 1 zawsze ma 'Nożyce', Gracz 2 kolejno :papier, kamień, a następnie nożyce.
                    Wygrywa: {paperRockScissors('scissors', 'rock')}
                    Następnie: {paperRockScissors('scissors', 'paper')}
                    Oraz w trzecim starciu: {paperRockScissors('scissors', 'scisors')}
                </div>
                <div className='paperGameAll'>{'       let paperRockScissors = function (player1, player2) {\n' +
                '\n' +
                '            const allowedValues = ["paper", "rock", "scissors"];\n' +
                '            if (\n' +
                '                allowedValues.indexOf(player1.toLowerCase()) === -1 ||\n' +
                '                allowedValues.indexOf(player2.toLowerCase()) === -1\n' +
                '            ) {\n' +
                '                return "Remis  ";\n' +
                '            }\n' +
                '            ;\n' +
                '\n' +
                '            if (\n' +
                '                (player1.toLowerCase() === "paper" && player2.toLowerCase() === "rock") ||\n' +
                '                (player1.toLowerCase() === "rock" && player2.toLowerCase() === "scissors") ||\n' +
                '                (player1.toLowerCase() === "scissors" && player2.toLowerCase() === "paper")\n' +
                '            ) {\n' +
                '                return "Gracz 1  ";\n' +
                '            } else if (player1.toLowerCase() === player2.toLowerCase()) {\n' +
                '                return "Remis";\n' +
                '            } else {\n' +
                '                return "Gracz 2  "\n' +
                '            }\n' +
                '        };'}</div>
            </section>
        )
    }
}

export default PaperGame;
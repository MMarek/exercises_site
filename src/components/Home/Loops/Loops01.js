import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class Square extends Component {

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

        let n = 5;
        let result1 = 1;
        for (let i = 1; i <= n; i++) {
            result1 = result1 * i
        }

        let result2 = 1;
        let j = 1;
        while (j <= n) {
            result2 *= j;
            j++;
        }
        return (
            <section className='loops' style={styleOne}
                     onClick={this.handleButtonOneClick}
            >
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>1.</div>
                <div className='squareFor'>
                    Śilnia liczby {n} wynosi {result1} - wykonane pętlą for:
                    <p>
                        {'let n = 5; let result1 = 1; for (let i = 1; i <= n; i++) { result1 = result1 * i }'}
                    </p>
                </div>

                <span> Zapraszam do zapoznania się z kodem :) </span>

                <div className='squareWhile'>
                    Śilnia liczby {n} wynosi {result2} - wykonane pętlą while:
                    <p>
                        {'let result2 = 1; let j = 1; while (j <= n) { result2 *= j; j++; }'}
                    </p>
                </div>
            </section>
        )
    }
}

export default Square;
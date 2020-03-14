import React, {Component} from "react";
import '../../../scss/_loops.scss'

class Square extends Component {

    state = {
        one: false
    };

    handleButtonOneClick = () => {
        this.setState({
            one: this.state.one ? false : true
        })
    };

    render() {

        const {one} = this.state;

        let styleOne = {
            width: one ? '30%' : '10%',
            height: one ? '45%' : '10%',
            fontSize: one ? '15px' : '0%',
            transition: '2s',
        };

        let styleTwo = {
            // width: one ? '300px' : '100px',
            // height: one ? '350px' : '100px',
            fontSize: one ? '0%' : '70px',
            transition: '2s',
            // padding: '0px'
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
                <div className='div1' style={styleTwo} onClick={this.handleButtonOneClick}>1.</div>
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
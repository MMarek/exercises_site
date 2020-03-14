import React, {Component} from "react";
import '../../../scss/_loops.scss'

class Square extends Component {

    state = {
        open: true,
        one: false
    }

    handleButtonOneOn = () => {
        this.setState({one: true});
        console.log('najazd');
    };

    handleButtonOneOff = () => {
        this.setState({one: false});
        console.log('zjazd');
    };

    handleButtonOneClick = () => {
        console.log('klik');
    };

    render() {

        const {open} = this.state;
        let show = open ? null : 'hide';
        const {one} = this.state;

        let styleOne = {
            fontSize: one ? '100px' : '20px',
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
                     onMouseEnter={this.handleButtonOneOn}
                     onMouseLeave={this.handleButtonOneOff}>
                {/*<nav className={show}>*/}
                    <div className='squareFor'>
                        Śilnia liczby {n} wynosi {result1} - wykonane pętlą for
                    </div>

                    <h4> Zapraszam do prześledzenia kodu :) </h4>

                    <div className='squareWhile'>
                        Śilnia liczby {n} wynosi {result2} - wykonane pętlą while
                    </div>
                {/*</nav>*/}
            </section>
        )
    }
}

export default Square;
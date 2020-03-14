import React, {Component} from "react";
import '../../../scss/_loops.scss'

class SumOfAll extends Component {

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
            width: one ? '50%' : '10%',
            height: one ? '45%' : '10%',
            fontSize: one ? '15px' : '0%',
            transition: '2s',
        };

        let styleTwo = {
            fontSize: one ? '0%' : '70px',
            transition: '2s',
        };

        let x = 1;
        let y = 100;
        let sum = 0;

        for (let i = x; i <= y; i = i + 1) {
            sum += i;
        }
        // console.log(sum);
        return (
            <section className='sum' style={styleOne}
                     onClick={this.handleButtonOneClick}>
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>2.</div>

                <div className='sumOfAll'>
                    Suma wszystkich dodanych do siebie liczb w przedziale od 1 do 100 daje wynik: {sum} :)
               <p>{'let x = 1; let y = 100; let sum = 0; for (let i = x; i <= y; i = i + 1) { sum += i;}'}</p>
                </div>

                <span>Dodaj tekst</span>
            </section>
        )
    }
}

export default SumOfAll;
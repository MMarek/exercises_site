import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class Arithmetic extends Component{

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

        const numbers = [2,5,17,53,89,146,271,330,751];

        let sum1 = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum1 += numbers[i];
        }
        let avg = sum1 / numbers.length;

        return (
            <section className='arithmetic' style={styleOne}
            onClick={this.handleButtonOneClick}>
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>5.</div>
                <div className='arithmeticAverage'>
                    Suma liczb: [2,5,17,53,89,146,271,330,751] podzielona przez ich ilość daje średnią arytmetyczną: {avg}
                </div>
                <div className='arithmeticAverage'>
                    {'const numbers = [2,5,17,53,89,146,271,330,751];\n' +
                    '\n' +
                    '        let sum1 = 0;\n' +
                    '        for (let i = 0; i < numbers.length; i++) {\n' +
                    '            sum1 += numbers[i];\n' +
                    '        }\n' +
                    '        let avg = sum1 / numbers.length;'}
                </div>
            </section>
        )

    }
}

export default Arithmetic;

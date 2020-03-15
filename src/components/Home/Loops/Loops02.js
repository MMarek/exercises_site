import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class SumOfAll extends Component {

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

        let x = 1;
        let y = 100;
        let sum = 0;

        for (let i = x; i <= y; i = i + 1) {
            sum += i;
        }
        return (
            <section className='sum' style={styleOne}
                     onClick={this.handleButtonOneClick}>
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>2.</div>

                <div className='sumOfAll'>
                    Suma wszystkich dodanych do siebie liczb w przedziale od 1 do 100 daje wynik: {sum} :)
                </div>
                <div className='sumOfAll'>
                    {' let x = 1;\n' +
                    '        let y = 100;\n' +
                    '        let sum = 0;\n' +
                    '\n' +
                    '        for (let i = x; i <= y; i = i + 1) {\n' +
                    '            sum += i;\n' +
                    '        }'}
                </div>
            </section>
        )
    }
}

export default SumOfAll;
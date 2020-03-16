import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class NegativeNumber extends Component {

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


        let negativeNumbers = [];
        function getNegativeNumbers(array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] < 0) {
                    negativeNumbers.push(array[i]);
                }
            }
            return negativeNumbers;
        }

        let randomArray = [4, -7, 86, 9, -43, 23, -14, -99, 3];

        return (
            <section className='container' style={styleOne}
                     onClick={this.handleButtonOneClick}>

                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>4.</div>

                <div className='firstDiv'>
                    Wszystkie liczby ujemne z przykładowej tablicy [4, -7, 86, 9, -43, 23, -14, -99, 3] to: {getNegativeNumbers(randomArray)}
                </div>
                <div className='firstDiv'>{'let negativeNumbers = [];\n' +
                'function getNegativeNumbers(array) {\n' +
                '    for (let i = 0; i < array.length; i++) {\n' +
                '        if (array[i] < 0) {\n' +
                '            negativeNumbers.push(array[i]);\n' +
                '        }\n' +
                '    }\n' +
                '    return negativeNumbers;\n' +
                '}\n' +
                '\n' +
                'let randomArray = [4, -7, 86, 9, -43, 23, -14, -99, 3]'}
                </div>

            </section>
        )
    }
}

export default NegativeNumber;
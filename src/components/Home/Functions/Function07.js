import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class DaysInn extends Component {

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

        let calcValues = function (argument) {
            let singleValue;
            if (argument === 1) {
                singleValue = 200;
            }else if (argument >= 2 && argument <= 3) {
                singleValue = 180;
            }else if (argument >= 4 && argument <= 7) {
                singleValue = 160;
            }else if (argument >= 8) {
                singleValue = 150;
            }else{
                console.log('Niepoprawna ilość dni');
                return false;
            }

            let bonus = Math.floor(argument / 7) * 50;
            let finalValue = argument * singleValue - bonus;
            return  finalValue;
        };

        let value = calcValues(1);
        let value2 = calcValues(3);
        let value3 = calcValues(7);
        let value4 = calcValues(12);
        let value5 = calcValues(18);
        let value6 = calcValues(21);
        let value7 = calcValues(70);

        return (
            <section className='container' style={styleOne}
                     onClick={this.handleButtonOneClick}>

                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>7.</div>

                <div className='firstDiv'>
                    Wartość kolejnych dni spędzonych w hotelu, względem narzuconego cennika wynosi:
                    Dzień pierwszy: {value },
                    Dzień drugi: {value2 },
                    Dzień trzeci: {value3 },
                    Dzień czwarty: {value4 },
                    Dzień piąty: {value5 },
                    Dzień szusty: {value6 },
                    Dzień siódmy: {value7 },
                </div>
                <div className='firstDiv'>{'    let calcValues = function (argument) {\n' +
                '            let singleValue;\n' +
                '            if (argument === 1) {\n' +
                '                singleValue = 200;\n' +
                '            }else if (argument >= 2 && argument <= 3) {\n' +
                '                singleValue = 180;\n' +
                '            }else if (argument >= 4 && argument <= 7) {\n' +
                '                singleValue = 160;\n' +
                '            }else if (argument >= 8) {\n' +
                '                singleValue = 150;\n' +
                '            }else{\n' +
                '                console.log(\'Niepoprawna ilość dni\');\n' +
                '                return false;\n' +
                '            }\n' +
                '\n' +
                '            let bonus = Math.floor(argument / 7) * 50;\n' +
                '            let finalValue = argument * singleValue - bonus;\n' +
                '            return  finalValue;\n' +
                '        };\n' +
                '\n' +
                '        let value = calcValues(1);\n' +
                '\n' +
                '        let value2 = calcValues(3);\n' +
                '\n' +
                '        let value3 = calcValues(7);\n' +
                '\n' +
                '        let value4 = calcValues(12);\n' +
                '\n' +
                '        let value5 = calcValues(18);\n' +
                '\n' +
                '        let value6 = calcValues(21);\n' +
                '\n' +
                '        let value7 = calcValues(70);\n' +
                '      '}</div>

            </section>
        )
    }
}

export default DaysInn;
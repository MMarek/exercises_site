import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class SecondMax extends Component {

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

        function getSecoundMaxNumber(arrayNumbers) {
            let firstMaxNumber = 0;
            let secoundMaxNumber = 0;

            for (let i = 0; i < arrayNumbers.length; i++) {
                if (firstMaxNumber < arrayNumbers[i]) {
                    secoundMaxNumber = firstMaxNumber;
                    firstMaxNumber = arrayNumbers[i];
                } else if (secoundMaxNumber < arrayNumbers[i]) {
                    secoundMaxNumber = arrayNumbers[i];
                }
            }
            return secoundMaxNumber
        }

        let newArray = [3,7,42,277,4,51,9,8,7,66,53,278];
        // console.log(getSecoundMaxNumber(newArray))

        return (
            <section className='secoundMax' style={styleOne}
            onClick={this.handleButtonOneClick}>

                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>3.</div>

                <div className='secoundMaxNumber'>
                    Druga największa liczba z następującej tablicy [3,7,42,277,4,51,9,8,7,66,53,278] to: {getSecoundMaxNumber(newArray)}
                </div>
                <div className='secoundMaxNumber'>{'function getSecoundMaxNumber(arrayNumbers) {\n' +
                '    let firstMaxNumber = 0;\n' +
                '    let secoundMaxNumber = 0;\n' +
                '\n' +
                '    for (let i = 0; i < arrayNumbers.length; i++) {\n' +
                '        if (firstMaxNumber < arrayNumbers[i]) {\n' +
                '            secoundMaxNumber = firstMaxNumber;\n' +
                '            firstMaxNumber = arrayNumbers[i];\n' +
                '        } else if (secoundMaxNumber < arrayNumbers[i]) {\n' +
                '            secoundMaxNumber = arrayNumbers[i];\n' +
                '        }\n' +
                '    }\n' +
                '    return secoundMaxNumber\n' +
                '}\n' +
                '\n' +
                'let newArray = [3,7,42,277,4,51,9,8,7,66,53,278];'}</div>

            </section>
        )
    }
}

export default SecondMax;
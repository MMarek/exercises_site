import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class EvenNumber extends Component {

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
            fontSize: click ? '15px' : '0%',
            transition: '2s',
        };

        let styleTwo = {
            fontSize: click ? '0%' : '70px',
            transition: '5s',
        };


        let randomNumbers = [];

        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * 29 + 1);
            randomNumbers.push(random)
        }

        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] % 2 !== 0) {
                randomNumbers[i] +=1;
            }
        }

        return (
            <section className='evenNumber' style={styleOne}
            onClick={this.handleButtonOneClick}>
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>6.</div>

                <div className='evenNumberDiv'>
                   Losowe liczby z zakresu od 1 do 10, wygenerowane przy pomocy `Math.random()`,
                    a każda nieparzysta w niej, zamieniona zostaje w parzystą o wartość do góry.
                    <p>Oto one: {randomNumbers}</p>
                </div>
                <div className='evenNumberDiv'>
                    {'let randomNumbers = [];\n' +
                    '\n' +
                    '        for (let i = 0; i < 10; i++) {\n' +
                    '            let random = Math.floor(Math.random() * 29 + 1);\n' +
                    '            randomNumbers.push(random)\n' +
                    '        }\n' +
                    '\n' +
                    '        for (let i = 0; i < randomNumbers.length; i++) {\n' +
                    '            if (randomNumbers[i] % 2 !== 0) {\n' +
                    '                randomNumbers[i] +=1;\n' +
                    '            }\n' +
                    '        }'}
                </div>
            </section>
        )
    }
}

export default EvenNumber;
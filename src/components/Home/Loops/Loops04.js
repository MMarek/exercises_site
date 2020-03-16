import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class Number extends Component {

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

        let arr = [];

        for (let i = 0; i < 15; i++) {
            let random = Math.floor(Math.random() * 9 + 1);
            arr.push(random)
        }

        let duplicatedValues = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j] && duplicatedValues.indexOf(arr[i]) === -1) {
                    duplicatedValues.push(arr[i]);
                    break;
                }
            }
        }

        return (
            <section className='container' style={styleOne}
            onClick={this.handleButtonOneClick}
            >
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>4.</div>

                <div className='firstDiv'>
                    Losowe liczby z przedziału od 1 do 15 które się powtarzają to: {duplicatedValues},
                    liczby te losowane są przy każdym odświeżeniu strony.
                    <p>powtarza się {duplicatedValues.length} liczb/y</p>
                </div>
                <div className='firstDiv'>
                    <p>Oto wzór:</p>
                    {'for (let i = 0; i < arr.length; i++) {\n' +
                '            for (let j = i + 1; j < arr.length; j++) {\n' +
                '                if (arr[i] === arr[j] && duplicatedValues.indexOf (arr[i]) === -1) {\n' +
                '                    duplicatedValues.push (arr[i]);\n' +
                '                    break;\n' +
                '                }\n' +
                '            }\n' +
                '        }'}</div>
            </section>
        )
    }
}

export default Number;
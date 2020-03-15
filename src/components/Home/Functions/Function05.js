import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class AddsTo extends Component {

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


        function getEvenSum(m) {
            let sum = 0;
            for (let i = 1; i <= m; i++) {
                if (i % 2 === 0) {
                    sum = sum + i;
                }
            }
            return sum
        }

        let m = 100;
        let sum = getEvenSum(m);

        return (
            <section className='addsTo' style={styleOne}
                     onClick={this.handleButtonOneClick}>

                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>5.</div>

                <div className='addsToAll'>
                    Suma wszystkich liczb parzystych z przedziału od 1 do 100 wynosi: {sum}
                </div>
                <div className='addsToAll'>
                    {'function getEvenSum(m) {\n' +
                    '    let sum4 = 0;\n' +
                    '    for (let i = 1; i <= m; i++) {\n' +
                    '        if (i % 2 === 0) {\n' +
                    '            sum4 = sum4 + i;\n' +
                    '        }\n' +
                    '    }\n' +
                    '    return sum4\n' +
                    '}\n' +
                    '\n' +
                    'let m = 10;\n' +
                    'let sum4 = getEvenSum(m);'}
                </div>

            </section>
        )
    }
}

export default AddsTo;
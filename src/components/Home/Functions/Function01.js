import React, {Component} from "react";
import '../../../scss/_functions.scss'

class ArgumentSum extends Component {

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

        let sumArr = function (numbersArray) {
            let sum = 0;
            for (let i = 0; i < numbersArray.length ; i++) {
                sum += numbersArray[i]
            }
            return sum;
        };

        let arr1 = [1,2,3,4,5,6,7,8,9];
        let sum2 = sumArr(arr1);
        // console.log(sum2);

        return (
            <section className='argumentSum' style={styleOne}
                     onClick={this.handleButtonOneClick}>
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>1.</div>

                <div className='argumentSumAll'>
                    {' let sumArr = function (numbersArray) {\n' +
                    '            let sum = 0;\n' +
                    '            for (let i = 0; i < numbersArray.length ; i++) {\n' +
                    '                sum += numbersArray[i]\n' +
                    '            }\n' +
                    '            return sum;\n' +
                    '        };\n' +
                    '\n' +
                    '        let arr1 = [1,2,3,4,5,6,7,8,9];\n' +
                    '        let sum2 = sumArr(arr1);'}
                </div>
                <div className='argumentSumAll'>
                    Suma wszystkich podanych liczb, jako argument, wynosi {sum2}
                </div>

            </section>
        )
    }
}

export default ArgumentSum;
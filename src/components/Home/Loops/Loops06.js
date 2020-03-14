import React, {Component} from "react";
import '../../../scss/_loops.scss'

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
            width: click ? '30%' : '10%',
            height: click ? '45%' : '10%',
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
                    {randomNumbers}
                </div>
            </section>
        )
    }
}

export default EvenNumber;
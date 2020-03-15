import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class Stars extends Component {

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

        let k = 15;

        let textResult = "";
        for (let i = 0; i < k; i++) {
            for (let j = 0; j < k; j++) {
                if ((i + j) % 2 === 0) {
                    textResult += "-";
                } else {
                    textResult += "+";
                }
            }
            // textResult += "\n"; // zaczyna od nowej linii po każdej iteracji
        }

        // console.log(textResult);
        return (
            <section className='stars' style={styleOne}
            onClick={this.handleButtonOneClick}>
                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>3.</div>
                <div className='allStars'>
                    <h4>Program zamieszczający naprzemiennie '+' oraz '-', posiadający pętle w pętli:</h4>

                    {textResult}

                    <p>{'let k = 15; let textResult = ""; for (let i = 0; i < k; i++) {for (let j = 0; j < k; j++) ' +
                    '{if ((i + j) % 2 === 0) {textResult += "-";} else {textResult += "+";}}}'}</p>
                </div>
            </section>
        )
    }
}

export default Stars;
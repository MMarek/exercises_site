import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class ThreeButtons extends Component {

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

        let styleThree = {
            width: click ? '30%' : '0%',
            height: click ? '100%' : '10%',
            fontSize: click ? '40px' : '0%',
            transition: '2s',
        };

        document.addEventListener('DOMContentLoaded', function () {

            const buttons = document.querySelectorAll('button');
            console.log(buttons);

            const counter = document.querySelector('p .counterMain');
            console.log(counter);

            for (let i = 4; i < buttons.length; i++) {
                buttons[i].addEventListener('mouseenter', function () {
                    counter.innerText = parseInt(counter.innerText) + 1;
                })
            }
        });


        return (

            <section className='container' style={styleOne} onClick={this.handleButtonOneClick}>

                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>3.</div>

                <div className='firstDiv'>Najeżdżając kursorem myszki na jeden z guzików, zwiększasz wartość licznika.
                    (podobnie jak w zadaniu nr1.)
                </div>
                <div className='firstDiv'>
                    <button style={styleThree}>Guzik 1</button>
                    <button style={styleThree}>Guzik 2</button>
                    <button style={styleThree}>Guzik 3</button>
                    <p>
                        Wartość licznika: <span className="counterMain">0</span>
                    </p>
                </div>
            </section>
        )
    }
}

export default ThreeButtons;